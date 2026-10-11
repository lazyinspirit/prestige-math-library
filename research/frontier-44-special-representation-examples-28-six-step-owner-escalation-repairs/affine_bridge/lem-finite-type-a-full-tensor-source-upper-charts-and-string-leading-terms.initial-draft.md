---
id: lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms
kind: lemma
title: "Full finite type-A tensor source upper charts and string leading terms"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
deps: [def-axiom-of-choice, def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules, def-higher-level-wedge-tensor-fock-module, def-dual-canonical-canonical-and-quasi-canonical-fock-bases, thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules, thm-crystal-basis-tensor-product-rule, lem-i-string-components-of-a-crystal-lattice, thm-unique-kashiwara-i-string-decomposition, thm-quantized-sl-two-string-formulas, def-balanced-triple-and-globalization-map]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masaki Kashiwara, Global crystal bases of quantum groups"
      url: "https://www.kurims.kyoto-u.ac.jp/~kenkyubu/kashiwara/global-crystal.pdf"
      locator: "Printed pp.469–474, upper-chart convention, Lemma5.1.1/Corollary5.1.2 and Proposition5.3.1; local finite full-tensor upper construction and rank-one filtration proof below."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Printed12: upper chart at q=infinity versus lower reverse chart at q=0; printed16–18: exterior source upper/lower conventions."
---

## Statement

Assume inherited AC [[def-axiom-of-choice]] for the quantum suppliers. On every finite cut of the full ordered minuscule wedge tensor module, in either factor order, the source lattice $\mathcal L_0=\bigoplus_A A_0(s)M_A$, its ordinary-bar image $\mathcal L_\infty=\psi\mathcal L_0$, and the Laurent monomial lattice form a balanced **source upper** crystal triple, with global lifts $L_A$ and the tableau tensor crystal. This is a full-tensor statement, without restriction to its highest constituent.

For a root $i$, put $\varepsilon_i(A)=\max\{n:\tilde e_i^nA\ne0\}$, $\varphi_i(A)=\max\{n:\tilde f_i^nA\ne0\}$ and $r_i(A)=\varepsilon_i(A)+\varphi_i(A)+1$. Then
$$\ker E_i^{n+1}=\operatorname{span}_{\mathbb Q(s)}\{L_A:\varepsilon_i(A)\le n\}.$$
At fixed weight the rank-one filtration by string dimensions has basis the $L_A$ with $r_i(A)$ bounded by that dimension. In its associated string quotient,
$$E_iL_A=[\varepsilon_i(A)]_sL_{\tilde e_iA},\qquad F_iL_A=[\varphi_i(A)]_sL_{\tilde f_iA}.$$
The error terms have strictly smaller string dimension; a missing edge gives zero in the associated string. These are source-upper coefficients, rather than the divided lower-string coefficients $[\varphi+1]$ and $[\varepsilon+1]$.

## Facts & Assumptions

**Given:** A finite alphabet and ordered minuscule wedge factors, their coefficient-one subset actions and source coproduct of [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]], [[def-higher-level-wedge-tensor-fock-module]], and the two triangular charts and reverse bilinear form $C$ of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]].

[F1] Bounded finite tensor construction ([[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]]): finite products of finite-dimensional based highest modules have the full lower tensor crystal lattice, the corrected tensor global basis and an integral balanced triple, including every constituent.

[F2] Lower tensor residues and strings ([[thm-crystal-basis-tensor-product-rule]], [[lem-i-string-components-of-a-crystal-lattice]], [[thm-unique-kashiwara-i-string-decomposition]], [[thm-quantized-sl-two-string-formulas]]): the lower tensor rule, lattice string decomposition and $E F^{(k)}v=[a-k+1]F^{(k-1)}v$, $F F^{(k)}v=[k+1]F^{(k+1)}v$ on a top-weight-$a$ string.

[F3] Reverse forms ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]): $C(\widetilde M_A,\psi M_B)=\delta_{AB}$, $C(\widetilde T_A,L_B)=\delta_{AB}$, $\widetilde B=B^{\mathsf T}$, $(\widetilde E_i)^{\mathsf T}=\bar F_i$, $(\widetilde F_i)^{\mathsf T}=\bar E_i$, and $C(\widetilde\psi x,\psi y)=\overline{C(x,y)}$.

[F4] Balanced triples ([[def-balanced-triple-and-globalization-map]]): the common integral/zero/infinity intersection maps isomorphically to the residue chart; a prescribed residue has one global lift.

## Proof

**Proof technique:** dualize the actual reverse lower tensor construction with coefficient conjugation, then prove adapted kernels and compute its rank-one quotient.

1.1 **All reverse lower constituents.** Put $q=s^{-1}$ and use the reverse ordered tensor. Each elementary wedge subset factor is minuscule: for each root its nontrivial strings have length two, coefficients one, and its basis is its lower global basis at $q=0$ in the dictionary's toral convention $K_i=D_i^{-1}D_{i+1}$. The ground vector generates it. Apply [F1] to the finite product, not to just the ground constituent. Its raw reverse monomial $A_0(q)$-span is the lower tensor chart by [F2]; finite triangular correction produces the negative-source family $\widetilde T_A$ by uniqueness. Thus the reverse Laurent lattice and the zero/infinity charts have the simultaneous global basis $\widetilde T_A$. [F1, F2, F3, construct]

1.2 **The actual sesquilinear dual and exchanged coefficient rings.** Define $H(x,y)=C(\widetilde\psi x,y)$ on reverse/original factors. It is coefficient-antilinear in $x$ and linear in $y$. From [F3], $H(\widetilde M_A,M_B)=\overline{C(\widetilde M_A,\psi M_B)}=\delta_{AB}$, so its raw monomial Gram matrix is exactly $I$. Therefore the conjugate dual of the reverse $A_0(q)$-raw chart is exactly the original $A_0(s)$-raw chart: a coefficient $a(q)$ is conjugated to $a(q^{-1})=a(s)$, including denominators. Similarly the reverse infinity chart dualizes to the original infinity chart. On the global families $H(\widetilde T_A,L_B)=\delta_{AB}$ because $\widetilde T_A$ is fixed. Hence the dual integral, zero and infinity lattices have respectively bases $L_A$ over $\mathbb Z[s^{\pm1}]$, $A_0(s)$ and $A_\infty(s)$, and their common intersection is $\bigoplus_A\mathbb ZL_A$. This proves balancedness and identifies its ordinary bar with $\psi$ using the conjugate-bar identity of [F3]. It does not equate the two ordinary global bases. [F3, F4, step 1.1, algebra]

1.3 **Upper operators and full tableau residues.** The matrix adjoints of [F3], with the conjugation in $H$, give $H(\widetilde F_ix,y)=H(x,E_iy)$ and $H(\widetilde E_ix,y)=H(x,F_iy)$. On a reverse divided string $v_k=F_i^{(k)}v_0$, $0\le k\le a$, let $u_k$ be its $H$-dual basis, retaining the full pairing on its multiplicity space. Then $E_iu_k=[k]_su_{k-1}$ and $F_iu_k=[a-k]_su_{k+1}$ by [F2] and $\overline{[m]_q}=[m]_s$. The upper string operators are the shifts $u_k\mapsto u_{k-1},u_{k+1}$, defined as the conjugate adjoints of the lower shifts. They preserve the dual charts from step 1.2 and their residues are the adjoints of the partial permutation matrices of the lower tensor crystal. Thus they give partial inverse tableau moves on every tensor residue, with the reverse factor order undone by the dual pairing. On a column the simultaneous $i,i+1$ occupations cancel; on the original left-to-right column word cancel $-+$, with $-$ an $i+1$-only column and $+$ an $i$-only column. The raising move takes the leftmost surviving $-$ and lowering takes the rightmost surviving $+$: this is the reverse lower tensor rule of [F2] read through the dual basis. Equalities follow from the lower rule's non-strict raising and strict lowering tests, so no equality case is changed by naming the chart upper. Both reciprocal charts have the corresponding upper operators. [F2, F3, step 1.2, algebra]

2.1 **Endpoint divided powers and balanced uniqueness.** On the upper string $u_k$ of step 1.3, $E_i^{(k)}u_k=u_0$ and $E_i^{(k+1)}u_k=0$; thus if $E_i^{(n+1)}x=0$, then $E_i^{(n)}x=\tilde e_i^nx$, since all shorter components die. This is an identity on the sum of admissible strings, with its multiplicity spaces retained. If $x=L_A$ and $E_i^{(n+1)}x=0$, integrality of divided powers and preservation of both upper charts put $E_i^{(n)}x$ in their balanced intersection, with residue $\tilde e_i^nA$. Therefore it equals $L_{\tilde e_i^nA}$ when that residue is nonzero, and zero otherwise. Conversely suppose $\tilde e_i^{n+1}A=0$ but $E_i^{(n+1)}L_A\ne0$. Choose the maximal $m>n$ for which $E_i^{(m)}L_A\ne0$, possible by finite integrability. Applying the endpoint argument with $m$ gives a nonzero balanced vector with residue $\tilde e_i^mA=0$, contradicting injectivity in [F4]. Thus $E_i^{n+1}L_A=0$ iff $\varepsilon_i(A)\le n$. [F1, F2, F4, step 1.3, algebra]

2.2 **Adapted kernels, without assuming a tensor highest decomposition is based.** To exclude cancellation between global vectors outside a kernel, choose the largest $m$ occurring among the $\varepsilon_i(A)$ in a finite linear combination. Apply $E_i^{(m)}$. Step 2.1 sends its $m$-height terms to distinct top-labelled global vectors: partial inverse crystal strings imply that two labels at the same position have different top labels. Every lower-height term dies. Linear independence therefore forces all coefficients at that height to vanish if the combination is killed. Descend on $m$ to obtain the stated kernel span. The integral and chart kernels are exactly the spans of the same subset over their coefficient rings, because the global vectors are simultaneous bases. Hence all these kernel triples are balanced; quotienting by one such subset retains simultaneous bases and balancedness. [F2, F4, step 2.1, algebra]

3.1 **The associated rank-one filtration.** At root weight $\lambda=\langle h_i,\mathrm{wt}(A)\rangle$, a string of dimension $r$ has position $k=(r-1-\lambda)/2$. Thus the sum of strings with dimension at most $r$ at that weight is precisely $\ker E_i^{k+1}$, with the natural floor when parity requires it; by step 2.2 its global labels have $\varepsilon_i\le k$, equivalently $r_i\le r$. These weightwise spaces assemble into the rank-one submodule filtration. The associated quotient of dimension $r$ has simultaneous bases indexed by the labels $r_i(A)=r$, and is a sum of actual upper strings $u_0,\ldots,u_{r-1}$. Step 2.1 identifies the top vector of the position-$k$ global residue by $E_i^{(k)}L_A=L_{\tilde e_i^kA}$, modulo the shorter-string filtration. Consequently the position-$k$ vector is the upper normalized $u_k$, whose $E_i,F_i$ coefficients are exactly $[k]_s$ and $[r-1-k]_s$ by step 1.3. Identifying the next residue by partial inverse moves proves the two asserted leading-term equations, with all errors in shorter strings. This does not require a separately selected highest-weight decomposition of the full tensor module. [F2, step 1.3, step 2.1, step 2.2, algebra]

4.1 **Conclusion and factor orders.** Steps 1.1–1.3 construct the full source upper triple and its tableau residue crystal by conjugate duality of the entire reverse lower tensor construction; steps 2.1–2.2 give balanced adapted kernels; step 3.1 gives the associated-string Chevalley normalization. Reversing the initially chosen factor order repeats the same construction, and finite cuts commute with all supported subset actions and triangular global lifts. Every claim therefore concerns the full finite tensor cuts and both ordered products, without any categorical simple-label assertion. [step 1.3, step 2.2, step 3.1] ∎
