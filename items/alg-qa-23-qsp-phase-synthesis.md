---
id: alg-qa-23-qsp-phase-synthesis
kind: algorithm
title: Real bounded-polynomial QSP phase synthesis
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - lem-qa-23-exact-interval-boundedness-decision
  - alg-qa-23-bounded-height-numerical-roots
  - thm-qa-23-bounded-height-root-arithmetic-cost
  - lem-qa-23-qsp-completion-peel-arithmetic-cost
  - def-qa-23-qsp-signal-sequence
  - def-qa-23-qsp-admissible-polynomial-pair
  - thm-qa-23-qsp-phase-factorization
  - def-qc-circuit-cost-model
  - lem-qa-23-hermitian-signal-convention-conversion
  - lem-qa-23-positive-polynomial-complement-factorization
  - def-polynomial-degree-leading-coefficient-and-monic
  - alg-qa-23-polynomial-root-isolation
  - thm-qa-23-polynomial-root-isolation-correctness
  - alg-qa-23-certified-phase-approximation
  - thm-qa-23-certified-phase-approximation-correctness
  - thm-polynomial-division-algorithm-over-a-field
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - thm-of-square-roots
  - thm-algebra-of-continuous-functions
  - thm-extreme-value-r
  - thm-fermat-interior-extremum
  - lem-derivative-of-a-power
  - def-formal-derivative-of-a-polynomial
justified_by:
  - thm-qa-23-qsp-synthesis-correctness
axiom_use: "None; all loops are finite and all choices are from finite root lists or explicit deterministic searches."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 3 and Corollary 10, PDF pp. 7–14; Lemma 6 and Theorem 5, PDF pp. 10–12."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2, Lemma 29.1, PDF pp. 144–146."
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2, Sturm's Theorem"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
      locator: "§2, polynomial division, negative-remainder Sturm sequence and sign-variation proof, PDF pp. 2–4."
    - title: "EPFL, Sturm's Theorem"
      url: "https://lara.epfl.ch/w/_media/sar10/sturms_proof.pdf"
      locator: "Complete two-page proof, PDF pp. 1–2."
operational_contract_ref:
  path: research/quantum-algorithms-planning/operational-contracts.md
  section: OP1
  binding: true
---

## Definition

**Inputs and model.** Input a real polynomial $p\in\mathbb Q[x]$ or with exact algebraic real coefficients, a declared degree bound $d\ge0$, the required parity $d\bmod2$, and a positive rational tolerance $\delta$. The exact algebraic arithmetic model charges one operation for each ideal exact algebraic field operation and equality/order test, and charges rational arithmetic, root refinement, numerical operations and written output separately. Intermediates may be stored as a finite extension tower/DAG, with defining polynomials over previously constructed fields and rational isolators. Original input reading, expanded rational minimal-polynomial conversion and operation implementation bit costs are separate coordinates. Modes are `exact`, `complete-numerical`, and `efficient-numerical` (the default numerical mode); the first two retain the complete OP0 schedule. No polynomial bit-time or finite-basis gate bound is implicit. An optional finite-phase compiler must terminate on each requested phase and return either a unitary circuit with a certified operator-error bound or a declared failure. The optional `supplied-complement` mode also accepts exact real polynomials $B,C$ as a proposed certificate; it skips only their generation, not validation or phase synthesis. These coefficients are parameters in the ideal-real expression-DAG/interface model of [[alg-qa-23-certified-phase-approximation]]; all derived field expressions and square-root nodes must be supported by its charged equality/order interface. The original target remains rational/exact-algebraic. In either numerical mode the supplied certificate must complete the actual $p_0$ produced in Step 2. No claim identifies these ideal-real inputs with arbitrary computable-real names or includes their oracle implementation in the efficient bare-target bound.

**Positive-root descriptors.** When a nonnegative real expression $a$ requires a square root, test $a=0$ and return zero in that case. Otherwise retain the exact node $s$ defined by $s^2=a,s>0$. Construct its rational isolator by doubling $U$ from $1$ until $U^2>a$, and bisect $[0,U]$ using comparisons of the rational midpoint squared with $a$ until width at most $1$ (or any requested positive rational width). An equality returns the exact midpoint singleton; otherwise retain the half containing the positive root. All comparisons, doublings, bisections and descriptor writes are charged. This constructs a uniquely specified root by order and square-root existence, with a finite bound search, rather than calling general polynomial ROOTS on ideal-real coefficients.

1. **Validate the target.** Check the degree and parity coefficient conditions exactly. In `efficient-numerical` mode use [[lem-qa-23-exact-interval-boundedness-decision]] on the original polynomial and return INVALID exactly when its interval promise fails. This uses only polynomially many field/order operations and no input-root isolation. In the other two modes compute the formal derivative $p'$. If $p'$ is zero, check $|p(1)|\le1$. Otherwise call `REALROOTS(p')` from [[alg-qa-23-polynomial-root-isolation]], retain all roots in $[-1,1]$ including endpoints, and evaluate $p$ exactly at those algebraic roots and at $-1,1$. Return `INVALID` if any value is outside $[-1,1]$. This finite critical-point check certifies the full interval bound by the extreme-value and Fermat theorems.

2. **Set the numerical target.** Put $\delta_0=\min(\delta,8)$. In exact mode put $p_0=p$; in `complete-numerical` mode put $p_0=(1-\delta_0/8)p$. In `efficient-numerical` mode use ROUND-QSP from [[alg-qa-23-bounded-height-numerical-roots]]: shrink by $1-\delta_0/16$ and parity-preservingly round each coefficient to dyadic error at most $\delta_0/[64(d+1)]$. Its output $p_0$ has $\|p_0-p\|_\infty\le5\delta_0/64<\delta_0/8$ and $\|p_0\|_\infty\le1-3\delta_0/64<1$. Thus either numerical mode has $|p-p_0|\le\delta_0/8\le\delta/8$ on $[-1,1]$ and $|p_0|<1$ there. Clipping the shrink amount at $8$ keeps the target bounded for every positive tolerance.

3. **Build or validate the complementary pair.** Set $R=1-p_0^2$. First, in `supplied-complement` mode, verify by exact coefficient arithmetic that $R=B^2+(1-x^2)C^2$, that $B,C$ have the required degree bounds, and that their parities are $d$ and $d-1$; return `CERTIFICATE_ERROR` on failure, and on success go directly to Step 5, retaining the supplied pair even when $R=0$. Without a supplied pair, if $R=0$, set $B=C=0$ and go directly to Step 5. Only in the remaining $R\ne0$ case call `GRID-ROOTS(R,1)` from [[alg-qa-23-bounded-height-numerical-roots]] in efficient-numerical mode and `ROOTS(R,1)` in the other modes. The former uses the rounded rational coefficients and bounded normalized cut grids, not the complete mode's unbounded lexicographic pair search. Verify the exact root symmetries and $R\ge0$ certificate on $[-1,1]$, and group roots by the following classes, retaining multiplicities: zero; real pairs $\pm s$ with $0<s<1$; real pairs $\pm s$ with $s\ge1$; purely imaginary pairs $\pm ib$ with $b>0$; and nonreal quadruples $\pm a\pm ib$ with $a,b>0$. Sort descriptors by the rational isolating-rectangle coordinates, lexicographically. A failed symmetry or nonnegativity check returns `INVALID`.

4. **Construct the pair.** Start an unscaled pair $(B_u,C_u)=(1,0)$. For a zero root of multiplicity $2r$, multiply by $(x,0)$ $r$ times. For an interior real pair $\pm s$ of multiplicity $m$ at each root, $m$ is even; multiply by $(x^2-s^2,0)$ $m/2$ times. For an exterior real pair $\pm s$ of multiplicity $m$, multiply by $(\sqrt{s^2-1}\,x,s)$ $m$ times. For an imaginary pair $\pm ib$ of multiplicity $m$, multiply by $(\sqrt{b^2+1}\,x,b)$ $m$ times. For a nonreal quadruple $\pm a\pm ib$ of common multiplicity $m$, put
$$c=a^2+b^2+\sqrt{2(a^2+1)b^2+(a^2-1)^2+b^4}$$
and multiply by $(cx^2-(a^2+b^2),\sqrt{c^2-1}\,x)$ $m$ times. Each pair represents $B_u+i\sqrt{1-x^2}C_u$; multiply pairs by
$$ (B,C)(D,E)=(BD-(1-x^2)CE,\;BE+CD). $$
Set $G=B_u^2+(1-x^2)C_u^2$. The factor identities show that $G$ has exactly the roots of $R$, with the same multiplicities, and each root-class factor is nonnegative on $(-1,1)$; hence $R=\kappa G$ for a positive constant $\kappa$. To see positivity, choose a rational $x\in(-1,1)$ outside the finite root set; then $R(x)>0$ and $G(x)>0$. Compute $\kappa$ as the ratio of the leading coefficients of $R$ and $G$, and set $K=\sqrt{\kappa}$ using the nonnegative algebraic square root. Set $(B,C)=K(B_u,C_u)$. In efficient-numerical mode every positive square root in this step is represented by its degree-two tower equation and an explicitly bisected nonnegative rational isolator as in [[lem-qa-23-qsp-completion-peel-arithmetic-cost]]; the known root-bound-based upper endpoints make the descriptor loops polynomial. No generic ROOTS call with algebraic coefficients or flattened minimal polynomial is hidden in this instruction. Determine the parity profile $b$ from the nonzero component: $B$ has parity $b$ and $C$ has parity $1-b$, with the zero polynomial allowed either parity. Since $R\ne0$, these components are not both zero. If $b\ne d\bmod2$, multiply once by $(x,1)$, whose squared modulus is $x^2+(1-x^2)=1$. Verify the exact identity $R=B^2+(1-x^2)C^2$, the degree bounds and both parities; a failed identity returns `CERTIFICATE_ERROR`.

5. **Make the admissible pair.** For the reflection convention of [[def-qa-23-qsp-signal-sequence]], set $P=p_0+iB$ and $Q=C$. Then coefficient conjugation gives $PP^*+(1-x^2)QQ^*=p_0^2+B^2+(1-x^2)C^2=1$. OP1's source SU(2) completion packages an $i$ in its off-diagonal coefficient; this item keeps $Q=C$ for the reflection signal. Step 6 forms the corresponding source-normalized pair, and step 7 maps the complete phase list back using [[lem-qa-23-hermitian-signal-convention-conversion]], including its scalar $i^d$. Never use one convention's off-diagonal formula with the other's phases.

6. **Peel phases.** Form $P_S=i^{-d}P$ and $Q_S=i^{-(d+1)}Q$, and initialize an empty peel list. For nominal degree $n=d,d-1,\ldots$, if $P_S$ is constant, verify $Q_S=0$ and $|P_S|=1$, verify that $n$ is even, and store the base phase scalar $P_S$. Initialize the residual source phase-scalar list with $[P_S]$. To pad to degree $n$, prepend $n/2$ length-two identity blocks $W_SZ(\pi/2)W_SZ(-\pi/2)=I$; represent each block by phase scalars $(1,i,-i)$ and merge adjacent phase scalars by multiplication in matrix order. An odd constant case returns CERTIFICATE_ERROR. After completing the constant branch and its padding, exit the peel loop and proceed to Step 7. Otherwise let $\ell=\deg P_S$, read leading coefficients $a_\ell,b_{\ell-1}$, verify $b_{\ell-1}\ne0$ and $|a_\ell|=|b_{\ell-1}|$, and put $r=a_\ell/b_{\ell-1}=x+iy$. In every mode choose $\omega_n=i$ when $x=-1$; otherwise construct the positive root descriptor $s=\sqrt{(1+x)/2}$ by the preceding instructions (first returning $s=1$ when the radicand is $1$, otherwise using strict upper bound $1$) and set $\omega_n=s+i y/(2s)$. It has unit modulus and square $r$ by [[lem-qa-23-qsp-completion-peel-arithmetic-cost]]. Since $|r|=1$, $x\ge-1$; in the nonexceptional case $x>-1$ so $s>0$ and division is valid. This rule applies to ideal-real supplied coefficients without invoking algebraic ROOTS. Either square-root choice makes the exact leading-term cancellation valid. Set $e^{i\psi_n}=\omega_n$, append $\omega_n$ to the peel list with index $n$, and update:

   $$P_S\leftarrow e^{-i\psi_n}xP_S+e^{i\psi_n}(1-x^2)Q_S,\qquad Q_S\leftarrow e^{i\psi_n}xQ_S-e^{-i\psi_n}P_S,$$

   using the old right-hand sides simultaneously. Verify the coefficient identity after each peel. The cancelled leading terms lower the nominal degree by one. Return CERTIFICATE_ERROR if any exact check fails. The loop terminates after at most $d$ peels.

7. **Convert and approximate phases.** Append the reverse of the indexed peel list to the residual base phase-scalar list to obtain the source phase scalars $\zeta_0,\ldots,\zeta_d$ in matrix order. If $d=0$, take the sole reflection phase scalar to be $\omega_0=\zeta_0$. If $d\ge1$, convert them to reflection phase scalars by the inverse map in [[lem-qa-23-hermitian-signal-convention-conversion]]: set $\omega_0=e^{-i\pi/4}\zeta_0$, set $\omega_j=i\zeta_j$ for $1\le j<d$, and set $\omega_d=e^{3i\pi/4}\zeta_d$. These are exact multiplications by eighth roots of unity, represented with the positive root of $1/2$ and require no transcendental angle extraction; retain the exact scalar $i^d$ in controlled use. For each $\omega_j$, call [[alg-qa-23-certified-phase-approximation]] with tolerance $\delta_0/(16(d+1))$; return its rational angle and distance certificate. If a finite-basis phase compiler is separately supplied, pass it those angles and require a unitary output with further operator error at most $\delta_0/(16(d+1))$ for each phase; return IMPLEMENTATION_ERROR if it cannot supply that bound. Without such a compiler, output the exact phase-scalar descriptors (algebraic or ideal-real as selected) and continuous-rotation list with finite-basis compilation marked not applicable.

**Output and failure branches.** On `SUCCESS`, return $\Phi$, the exact $B,C$ identity certificate, every leading-coefficient/root certificate, the numerical phase certificates, and the actual arithmetic, query, gate, precision and output-cost ledger. `INVALID` means the input promise failed. `CERTIFICATE_ERROR` means an exact generated or supplied identity check failed. `IMPLEMENTATION_ERROR` means the optional finite-basis compiler could not certify its allocated per-phase error. In efficient-numerical mode, without a supplied complement or optional compiler, the full construction and its continuous-rotation phase certificates require $\operatorname{poly}(d,1+\log_+(1/\delta))$ operations in the declared exact-algebraic arithmetic model, by [[thm-qa-23-qsp-synthesis-correctness]]. Complete modes assert finite termination rather than that uniform bound; supplied-certificate reading and optional compiler work remain separately charged. No bare existence choice, free root oracle, free phase gate implementation, or finite Turing complexity claim is made.
