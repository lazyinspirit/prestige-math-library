# Quantum Schur foundation: actual construction boundary

Allocated scope: the single new draft `lem-polynomial-type-a-quantum-schur-realization-and-first-level-weyl-filtration`, run `frontier-44-special-representation-examples-28-six-step`. No item was created. The requested broad conclusion remains unproved here; the observations below are evidence, not a replacement narrower item or an acceptance receipt. No aggregate or runtime file was changed.

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the allocation and repair brief, native Alpha15/16 report passages, the current Schur definition and integral highest-lattice theorem, and the complete relevant Brundan section 3.1–3.22 from the cached manuscript. I did not read the full Green/Du prerequisites or claim to read Brundan sections 4–5. The modular owner read that broader chain in its original round; its source-reading and historical acquisition records remain untouched. This assessment made no network acquisition attempt and does not refund any exhausted source method or repair round. The configured compaction value was read as 500000; this is a configuration observation, not a claim to restart the inherited session.

## Integral maps that can actually be constructed

Let $A=\mathbb Z[v,v^{-1}]$, $q=v^2$, $V=A^N$, and $T=V^{\otimes r}$. Use Brundan's coproduct

$$\Delta(E_i)=1\otimes E_i+E_i\otimes K_iK_{i+1}^{-1},\qquad \Delta(F_i)=K_i^{-1}K_{i+1}\otimes F_i+F_i\otimes1.$$

The right Hecke action on adjacent letters $a,b$ is $v$ times their interchange for $a<b$, $v^2$ times the original word for $a=b$, and $(v^2-1)$ times the original word plus $v$ times the interchange for $a>b$. These are Laurent-polynomial matrices. The local two-letter calculation verifies the Hecke quadratic relation and commutation with the two local coproduct matrices. The braid relation is the three-letter Hecke calculation. Terms acting elsewhere have unchanged total adjacent-letter weight under interchange, so the local commutation calculation gives the commutation on every tensor length.

More explicitly, put $h_i(w)=\#i(w)-\#(i+1)(w)$ for a word $w$. For a subset $J$ of $a$ positions whose original letters are $i+1$, replace those letters by $i$. Its coefficient in $E_i^{(a)}e_w$ is

$$v^{a(a-1)/2+\sum_{j\in J}h_i(w_{>j})}.$$

For a subset of $a$ positions whose original letters are $i$, replace them by $i+1$. Its coefficient in $F_i^{(a)}e_w$ is

$$v^{a(a-1)/2-\sum_{j\in J}h_i(w_{<j})}.$$

To derive these expressions, write $E_i$ as the sum of its single-position summands. A chosen position squares to zero. For distinct positions $p<q$, applying the right-position summand first changes the suffix exponent of the left-position summand by two. Thus summing the $a!$ orders for the selected positions gives $v^{a(a-1)/2}[a]_v!$ times the original suffix coefficient. This identity is first a rational-function calculation but its resulting displayed coefficient is a Laurent monomial. The same calculation for $F_i$ uses prefixes; applying a left-position lowering first changes the subsequent inverse-prefix exponent by two. Therefore the divided-power matrices preserve the integral tensor lattice. Their commutation with $H_A$ follows over $\mathbb Q(v)$ from the generator commutation and then over $A$ by equality of their Laurent-polynomial entries. It consequently survives every field specialization, including roots of unity; no factorial is divided in the specialized field.

For a composition $\mu$ of $r$, let $w_\mu=1^{\mu_1}\cdots N^{\mu_N}$. The module map

$$m_\mu H_A\longrightarrow T_\mu,\qquad m_\mu h\longmapsto e_{w_\mu}h$$

is an isomorphism: the row subgroup acts on the sorted word by its trivial Hecke character, and the length-additive distinguished coset basis is sent to $v^{\ell(d)}e_{w_\mu d}$. Each word of content $\mu$ appears once, with an invertible Laurent monomial coefficient. This is also an arbitrary-ring base-change isomorphism. It identifies the tensor commutant with the actual permutation-summand endomorphism algebra constructed by the Schur-cellularity owner.

The integral toral operator

$$P_\mu=\prod_{j=1}^N\begin{bmatrix}K_j;0\\\mu_j\end{bmatrix}$$

is exactly the composition-weight projection on degree $r$ tensor space. Its scalar on content $\alpha$ is $\prod_j\left[\begin{smallmatrix}\alpha_j\\\mu_j\end{smallmatrix}\right]_v$. If $\alpha\ne\mu$ but both sum to $r$, some $\alpha_j<\mu_j$, whose factor is identically zero over $A$; on $\alpha=\mu$ every factor is one. Thus these projections belong to the actual integral image and remain projections at every specialization. Distinct integer weights are not identified merely because the $K_j$ eigenvalues coincide at a root of unity.

These arguments establish the map $U_A\to S_A$, its commuting action, and its weight projections. They do **not** establish that its image is all $S_A$.

## Exact normalization seam

Under the coset-to-word isomorphism, the permutation-summand form with diagonal $q^{\ell(d)}$ becomes ordinary tensor dot product. The current cellular star is its adjoint. Brundan's raw antiautomorphism $\tau(E_i)=F_i$, $\tau(K_j)=K_j$ is not this adjoint for his coproduct. Already

$$E_1e_{12}=e_{11},\qquad E_1e_{21}=ve_{11},\qquad F_1e_{11}=v^{-1}e_{12}+e_{21}.$$

Put $c_\mu=v^{-\sum_j\binom{\mu_j}{2}}$ and let $C$ multiply the content-$\mu$ tensor block by $c_\mu$. The weighted dot form with block factor $c_\mu$ has adjoint $C^{-1}s^*C$. The subset formulas above verify $\rho(\tau(u))=C^{-1}\rho(u)^*C$ for the divided generators and toral operators. For a raising subset, the difference between its suffix exponent and the reverse lowering-prefix exponent is $a(\mu_i-\mu_{i+1})+a^2$, whereas $c_{\mu+a\alpha_i}/c_\mu$ is $v^{-a(\mu_i-\mu_{i+1})-a^2}$; their factors cancel. This also proves the formula for all $a$ without generic-rank reasoning. Any full module/form identification must explicitly account for this unit conjugation.

Even after this conjugation, **restriction of the tensor form is not the normalized Weyl form**. For $\lambda=(1,1)$, the tensor high vector is

$$z_\lambda=e_{12}-v^{-1}e_{21}.$$

Its weighted tensor norm is $1+v^{-2}$. Over $\mathbb F_5$ at $v=2$, $q=4=-1$, that norm is zero. The normalized cellular highest vector has norm one by the actual identity projection $1_\lambda$ and the cell-product coefficient. Thus dividing a tensor restriction by the generic highest norm cannot give the required arbitrary-root construction. This is a defect in that shortcut, not a counterexample to the desired abstract realization theorem.

The modular owner confirms the correct proposed replacement: construct the abstract highest-coefficient form $B(xv_\lambda,yv_\lambda)=[v_\lambda](\tau(x)yv_\lambda)$ through the integral highest quotient, and identify it with the suitably conjugated cellular form only after constructing the actual module map. Its descent, integrality, and exact normalization must be proved, not borrowed from a tensor restriction.

## What still prevents authoring the allocated helper

1. **Integral spanning of the commutant.** A complete finite-degree triangular-generation identity is missing. For every orbit-matrix/double-coset basis map in $\operatorname{Hom}_{H_A}(M^\nu,M^\mu)$, one must specify an ordered divided-power word with the correct weight projections, prove its expansion in the actual basis, exhibit its leading Laurent-unit coefficient, and prove a terminating triangular order covering every matrix. A generic surjection and equal ranks do not prove integral surjectivity or surjectivity after specialization. For example, multiplication by $v+v^{-1}$ has full generic rank but loses rank at $v^2=-1$. The subset formulas alone do not give the required spanning identities.

2. **Integral highest-to-cell map.** For every $\lambda$, one must construct the map from the actual divided-right-power highest quotient to the current normalized semistandard cell module (or conversely), prove its defining relations on the actual vectors, and establish an integral unitriangular basis comparison. The existing integral-highest theorem supplies a free based quotient and weight character; it does not construct this map to $\varphi_T$, prove the $F_tz_\lambda$ semistandard minor is a unit, or identify its normalized form. Equal tableau weight ranks do not certify an integral isomorphism. If that existing theorem is used as a dependency, its explicitly declared inherited Choice assumption must be carried; no choice-free replacement was constructed here.

3. **Universal highest property at arbitrary roots.** The assertion that every cyclic polynomial highest module is a quotient of the specialized Weyl module needs a proved positive/Borel induction presentation or a proof that all divided highest relations hold in that module. It cannot be derived merely by specializing the generic universal module. Brundan's section 3.15 explicitly appeals to the quantized codeterminant generalization of Green's induction theorem. No proved local supplier in the inspected chain provides that theorem.

Once these premises are constructed, Brundan's section 3.18–3.19 argument can be made local: the ordered-root factorization $F_t=F_sF_{t(\mu)}$ generates the restriction from horizontal-strip highest candidates; successive maximal weights give highest quotients; universal highest surjections bound their dimensions; semistandard tableau deletion counts force equality. The first-coordinate-level-one selection then retains precisely one factor $W^{\lambda(i)}$ per removable node. At present the ordered-root semistandard basis and universal-highest surjections are exactly the missing premises, so that filtration is not proved here. The subsequent Hom statement in section 3.20 additionally uses the proved Borel/highest presentation; a filtration alone does not justify its asserted Hom dimension by informal exactness.

## Checks and root integration proposal

`python3 .../quantum_schur_foundation/tensor-interface-check.py` completed with exit zero. It checks the displayed finite subset matrices at ranks $N=2,3$, lengths $0\le r\le4$, over every nonzero parameter in $\mathbb F_2,\mathbb F_3,\mathbb F_5,\mathbb F_7$: 130 parameter cases, 84032 divided-power/Hecke commutation comparisons, 10439 weighted-adjoint comparisons, 4862 quadratic and 2977 braid comparisons. `finite-checks.json` records the actual counts and the root-form example. These diagnostics support the explicit formulas; they certify none of the three missing prerequisites.

No source item was edited or created, so no item precheck, rendercheck, or proof-layout was run. An empty selection would not be valid evidence. No source hash, verification stamp, mathematical acceptance, or current-readiness claim is proposed for the absent helper. Root should retain the broad missing-prerequisite hold and the existing exhausted histories. No manifest, page, contract, or consumer dependency should point to this helper until an actual complete carrier exists. The evidence-only partial construction can guide that construction but cannot close `f44-six-step-b15-3a-label-comparison` or `f44-six-step-b15-3a-large-hecke-prerequisite`.
