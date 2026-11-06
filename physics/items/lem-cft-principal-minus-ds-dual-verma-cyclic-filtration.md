---
id: lem-cft-principal-minus-ds-dual-verma-cyclic-filtration
kind: lemma
title: Corrected cyclic complex and every-page factorization for minus DS of dual affine Vermas
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
deps:
  - def-cft-affine-w-algebra-via-brst
  - thm-cft-affine-w-brst-pbw
  - lem-cft-principal-minus-ds-verma-and-induced-k-complex
  - lem-cft-principal-spectral-flow-contragredient-phase-bridge
  - lem-cft-principal-whittaker-universal-equivalence
  - lem-cft-finite-whittaker-coinvariants-exact
  - lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra
  - thm-harish-chandra-isomorphism-for-the-center
  - lem-cft-zhu-top-induction-and-forward-rationality
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
  - thm-universal-property-and-pbw-character-of-kac-moody-verma-modules
  - def-kac-moody-category-o
  - def-axiom-of-choice
dependency_roles:
  def-cft-affine-w-algebra-via-brst: mathematical-premise
  thm-cft-affine-w-brst-pbw: mathematical-premise
  lem-cft-principal-minus-ds-verma-and-induced-k-complex: mathematical-premise
  lem-cft-principal-spectral-flow-contragredient-phase-bridge: mathematical-premise
  lem-cft-principal-whittaker-universal-equivalence: mathematical-premise
  lem-cft-finite-whittaker-coinvariants-exact: mathematical-premise
  lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra: mathematical-premise
  thm-harish-chandra-isomorphism-for-the-center: mathematical-premise
  lem-cft-zhu-top-induction-and-forward-rationality: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
  thm-universal-property-and-pbw-character-of-kac-moody-verma-modules: mathematical-premise
  def-kac-moody-category-o: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Representation Theory of W-Algebras
      url: https://arxiv.org/pdf/math/0506056v4
      locator: Sections 8.1–8.8; the actual cone retraction, restricted-dual bounds and filtered W-mode comparison are constructed below.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 11
---

## Statement

Assume Choice and the pinned principal affine BRST data at noncritical k, with the natural universal Zhu identification $A(W^k)=Z(U(g))$. For every affine Verma $M_{\mathrm{aff}}(\lambda)$, the actual minus DS reduction of its full-Cartan-weight restricted dual satisfies

 $H_-^i(M_{\mathrm{aff}}(\lambda)^{*})=0$ for i≠0,
 $H_-^0(M_{\mathrm{aff}}(\lambda)^{*})=D_{W}(M_{W}(\gamma_{\bar{\lambda}}))$.

The isomorphism is an actual $W^k$-module isomorphism preserving the old loop-degree grading and its top line. Here $M_{W}$ is the actual universal highest module supplied by $n=0$ induction; $D_{W}$ is its graded contragredient for the new W conformal structure. No rationality, ordinary-trace completeness or generic reverse Zhu assertion is assumed.

## Facts & Assumptions

**Given:** The source affine root/ghost conventions, noncritical level, original full Cartan weight lambda, and the actual principal nilpotent character. Old energy N means old D-eigenvalue lambda(D)−N. Root height is evaluated on rho-vee. All words and ghost monomials are finite.

[F1] [[def-cft-affine-w-algebra-via-brst]] and [[thm-cft-affine-w-brst-pbw]] give the actual square-zero BRST currents and corrected-current brackets. In the cyclic construction below write $d=Q_{st}+\epsilon$ $\chi_0$, $\epsilon=±1$, where $\chi_0$ is the sum of negative simple-root ghost zero modes with the pinned character coefficients. For the actual production J−chi convention $\epsilon=−1$. The algebraic proof works for either epsilon; the actual physical minus comparison must use its matching signed ghost pairing, not an unmodified source formula.

[F2] [[lem-cft-principal-minus-ds-verma-and-induced-k-complex]] gives the concrete corrected b-minus current/negative-root ghost algebra C'', its actual embedded cocycle vertex algebra $W^k$ (after the new-to-old transport tau), and its induced complexes K(mu). Here tau is exactly F2's spectral-flow map $\tau=t_{-\rho^\vee}$: for a root of height $j$, it sends $J_\alpha(m)$ and $b_\alpha(m)$ to the corresponding modes at $m+j$, sends $c_\alpha(m)$ to its mode at $m-j$, and sends $a(m)$ to $a(m)+kB(\rho^\vee,a)\delta_{m,0}$. Its corrected-Cartan ghost shift is the one computed in that supplier. Every transported W mode below uses this same tau, including the opposite action in F4; no second transport is introduced. Their cohomology is concentrated in degree zero and is the actual $M_{W}(\gamma_{\mu})$, with the normalized top line and a free ordered negative W-mode basis. Changing epsilon is implemented by the diagonal root-height sign and does not change its finite central character.

[F3] [[lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra]] and [[thm-harish-chandra-isomorphism-for-the-center]] imply that finite CE cohomology $H^j(n+,M_{g}(\bar{\lambda}))$ at Cartan weight mu vanishes unless $\gamma_{\mu}=\gamma_{\bar{\lambda}}$, equivalently mu belongs to the finite dot-Weyl orbit of lambdabar. [[lem-cft-finite-whittaker-coinvariants-exact]], bound at SHA256 `66c08fc828ea78ea692c39ed0ae89686bfa9d25ebc88a0c76ffc590390a9a350`, supplies $H^i$ of the restricted dual top complex with its nondegenerate character: zero for i≠0 and the one-dimensional $\gamma_{\bar{\lambda}}$ line at $i=0$.

[F4] [[lem-cft-principal-spectral-flow-contragredient-phase-bridge]], bound at canonical content SHA256 `159bbca6bd6426c99fc6b6ffee5e313efbf468785a043f9bff04646e862f8ade` (verification excluded), constructs the signed physical-minus/dual-plus comparison. It uses the actual root-height involution sigma on the coefficient/ghost full-weight coset and the pairing $I_{r}(f)(c)=i^r$ B(f,sigma c). This identifies the actual minus complex with the full-weight restricted dual of the production $Q_{st}−\chi_0$ plus complex, and intertwines its W action with the intrinsic action `(u phi)(c)=phi(tau(theta_new(u))c)`. It preserves the height and old-energy filtrations. The literal $\theta_{\mathrm{old}}$ $tau=tau$ $\theta_{\mathrm{new}}$ is not used: the bridge proves the corrected identity $Ad(\sigma)^{-1}\theta_{\mathrm{old}}$ $tau=tau$ $\theta_{\mathrm{new}}$, including the root and ghost signs and Cartan scalar.

[F5] The actual affine PBW and $n=0$ induction are supplied by [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]], [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]], [[lem-cft-zhu-top-induction-and-forward-rationality]], and [[def-kac-moody-category-o]]. Only top induction/correspondence is used. Choice is inherited from [[def-axiom-of-choice]].

## Proof

1.1 Let $C=M_{\mathrm{aff}}(\lambda)$ tensor F be the actual plus coefficient/ghost complex with $d=Q_{st}+\epsilon$ $\chi_0$. Put $b_{\alpha}=\psi_{\alpha}$ for $\alpha>0$ and $c_{\alpha}=\psi_{−\alpha}$. The b creators have modes −n, $n\ge 1$; the c creators have modes −n, $n\ge 0$. Corrected currents are $Jhat_{a}=J_{a}−sum$ $c^\gamma_{a,\beta}:c_{\beta}$ $b_{\gamma}$:. Their b-minus and c fields close by the actual CAR/current calculation in F2. Define $C^{+}(\lambda)$ to be their cyclic module on $v_{\lambda}$ tensor1. Its ordered basis consists of negative-loop corrected b-minus currents and negative-loop c ghosts, applied to the finite-zero-loop space $T=M_{g}(\bar{\lambda})$ tensor Lambda(n−). Corrected zero modes $f_{\alpha}(0)$ and $c_{\alpha}(0)$ generate T. The corrected-current PBW map is triangular relative to affine-current word length: Jhat is its raw current plus a term with no affine current. Affine PBW and the exterior creator basis therefore prove both spanning and independence. The d commutators preserve this cyclic module, and on T its two summands are the finite CE differential and epsilon times wedge by the simple character. [F1, F2, F5, given, algebra]

2.1 There is an EXACT cone contraction from the full complex to this cyclic complex. Let $a=n+[t^{−1}]t^{−1}$. Its even cone generators are $A_{\alpha,n}=Jhat_{\alpha}(−n)$ and its odd generators $B_{\alpha,n}=b_{\alpha}(−n)$, $\alpha>0,n\ge 1$. They obey `[A_x,A_y]=A_[x,y]`, `[A_x,B_y]=B_[x,y]`, `[B_x,B_y]_+=0`; there is no central term since n+ is isotropic. The actual BRST commutators give $dB_{x}=A_{x}$ and $dA_{x}=0$. The character has only mode zero, so it contributes no additional term here. These are precisely the enveloping differential of the Lie super cone on a. Corrected PBW ordered with these gauge/antighost generators first gives a weight- and old-energy-preserving vector-space isomorphism U(cone(a)) tensor $C^{+}(\lambda)$ -> C,  u tensor v $->uv$. It is a CHAIN isomorphism: d(uv)=(du)v+(-1)^deg(u)u(dv), and both factors are actual d-stable subspaces. Thus no spectral perturbation or unsupported transposition of full plus cohomology is needed. [F1, F2, F5, step 1.1, algebra]

2.2 Define the top height defect by $ht(\lambda−\mu)=<\bar{\lambda}−mubar,\rho^\vee>$. On T it is a nonnegative integer with finite-dimensional pieces. Let $T_\ge r$ be its tail of defect at least r, $r\ge 0$. Positive old-loop modes kill T, corrected negative-root zero modes and c zero modes increase defect, and corrected Cartan zero modes preserve it. Thus $T_\ge r$ is a module for the nonnegative old-mode subalgebra. Define $R_{r}=U(C''_{\mathrm{old}})T_\ge r$. Its actual PBW space is the negative-loop creator space tensor $T_\ge r$, with $R_0=C^{+}$ and $intersection_{r}$ $R_{r}=0$. Every $R_{r}$ is an actual C'' submodule. The finite CE differential preserves top defect; the character strictly increases TOP defect by one. After induction both terms preserve $R_{r}$. In particular the character need NOT strictly increase the induced tail index: its commutator with a negative corrected current acts in the negative creator factor. [F1, F2, step 1.1, algebra]

3.1 Supersymmetric PBW symmetrization identifies U(cone(a)) with S(a) tensor Lambda(a) and intertwines the odd linear derivation $B_{x}->A_{x}$. This is naturality of the explicit symmetrization sum under a derivation, valid wordwise for countably many generators. On positive total generator length L use the Koszul homotopy `h=sum B_x partial_(A_x)/L`; on length zero put $h=0$. Directly $dh+hd=id−unit*augmentation$. Replacing $A_{x}$ by $B_{x}$ preserves its full Cartan weight and old energy; every word has finitely many variables. Tensor this homotopy with id on $C^{+}$. The cross terms with its differential cancel by the Koszul sign, giving a full-weight- and old-energy-preserving chain retraction C <-> $C^{+}$. Consequently the homotopy TRANSPOSES to their full-weight restricted duals. Restricted transpose is legitimate because these maps preserve the entire Cartan weight, rather than only old D, and the individual full-weight spaces are finite. Thus restriction $C^{*}->(C^{+})^{*}$ is a quasi-isomorphism. It is W-linear for the intrinsic opposite W action in F4, since $C^{+}$ is a W submodule and its inclusion is a W-chain map. [F2, F4, F5, step 2.1, algebra]

3.2 The quotient $(C^{+}/R_{r})$ at fixed old energy N is finite dimensional. Indeed the negative-loop creators all have energy at least one, so their number and indices are bounded by N; there are finitely many root/Cartan labels. Its top factor $T/T_\ge r$ has finitely many root-height monomials and a finite zero-ghost exterior algebra. At a fixed full Cartan weight, $R_{r}$ is zero for sufficiently large r: every negative-root current or c creator has nonnegative horizontal defect, while Cartan creators contribute zero. Define $F_{r}$ $X=(C^{+}/R_{r})^{*}$ subset $X=(C^{+})^{*}$, $F_0X=0$. Then $F_{r}$ is increasing, exhaustive and d-stable. Each fixed-old-energy $F_{r}X$ is finite dimensional and is its ordinary old-energy restricted dual; nevertheless X at fixed old energy need NOT be finite dimensional. Exhaustiveness follows from finite full-weight support and the preceding tail bound. The intrinsic W action preserves $F_{r}$ by $R_{r}$ stability. [F2, F4, F5, step 2.2, algebra]

3.3 The primal associated tail piece at defect r is the direct sum, over weights mu with that defect, of the actual complexes K(mu) tensor $(T_{\mu},Q_{st})$. To verify it, negative corrected root and c zero modes strictly raise top defect and vanish in the quotient; positive loop modes kill the top, and Cartan zero modes act by mu. Thus each top vector is a one-dimensional induced top of weight mu. The differential is exactly d(u tensor v)=[d,u]tensor v+(-1)^deg(u)u tensor $Q_{st}$ v. The first factor retains FULL $\operatorname{ad}(Q_{st}+\epsilon\chi_0)$; only the character acting on the top factor disappears in the associated graded. This identity proves the complex decomposition, including the terms that would be lost by treating global chi as strictly filtered. F2 now computes its first-factor cohomology. F3 computes the top support and gives $\gamma_{\mu}=\gamma_{\bar{\lambda}}$ on every surviving multiplicity. [F1, F2, F3, step 2.2, algebra]

4.1 For completeness this filtration really converges. At fixed N and filtration index r, cycles on page s are vectors x in $F_{r}$ with dx in $F_{r-s}$; when $s>r$ they are actual cycles. The possible incoming boundaries form the increasing sequence $F_{r}$ intersect $dF_{r+s}$; finite dimensionality of $F_{r}$ makes it eventually stationary, and its union is $F_{r}$ intersect dX by exhaustiveness. Thus the limiting term is exactly $gr_{F}$ H(X), with no inverse-limit exactness claim. The same construction applies to the top restricted dual $T^{*}$. In fact the computed first page below has only finitely many nonzero r, giving a uniform finite collapse bound. [step 3.2, algebra]

4.2 Hence the first page of X has a normalized W-module isomorphism $E_1(X)=D_{W}(M_{W}(\gamma_{\bar{\lambda}}))$ tensor $E_1(T^{*})$. This is not yet used as a mere abstract character identity. We next construct an ACTUAL filtered chain map which induces it and therefore controls all later differentials. [F2, F3, step 3.3, algebra]

4.3 First construct exact universal W induction over arbitrary finite Z-top modules. The actual induced module $M_{Z}=Ind_{W}(Z)$ has its commuting right Z action. Ordered negative W words span it by the finite normal-product reordering from F2. If a finite right-Z relation among those words existed, specialize at every central character $\gamma_{\mu}$. The induced map to $M_{W}(\gamma_{\mu})=H^0(K(\mu))$ sends those words to its independent PBW basis. Every coefficient would vanish under all $\gamma_{\mu}$, hence vanish in Z by the Harish-Chandra isomorphism (evaluation on all mu separates invariant polynomials). Therefore $M_{Z}$ is free as a right Z-module on the negative W words. The universal property gives $Ind_{W}(E)=M_{Z}$ $tensor_{Z}$ E for any finite Z-module E, so this induction is exact. At every energy N its negative word space $U_-$ has finite dimension. This argument proves the required arbitrary-top PBW freeness instead of importing flatness from one-dimensional character modules. [F2, F3, F5, step 3.3, algebra]

5.1 Give $T/T_\ge r$ its ACTUAL W Zhu-top action, inherited from the chain action of tau(W) on $C^{+}$. Positive W modes kill it; zero modes need not act by a fixed scalar character on chains. Since tau(W) is d-closed, its action commutes with the top differential. The universal-property multiplication map $m_{r}:Ind_{W}(T/T_\ge r)$ -> $C^{+}/R_{r}$, u tensor v -> tau(u)v is therefore a genuine W-linear CHAIN map. Its differential is 1 tensor d on the top, since $[d,tau(u)]=0$. These maps commute with every quotient transition $r->r-1$. This is a construction from the actual negative W modes and top action; no factorization of the W action on all chains through $\gamma_{\bar{\lambda}}$ is asserted. [F1, F2, step 2.2, step 4.3, algebra]

6.1 Transposing $m_{r}$ by the NEW W opposite action gives compatible W-linear chain maps $F_{r}X$ -> $D_{W}(Ind_{W}(T/T_\ge r))$. Their union is an actual filtered chain map into the contragredient induced top complex. It lands in the required restricted dual: at old energy N there are finitely many negative W words; each transported word acts on T by finitely many current/ghost terms of bounded length and hence finitely many horizontal weight shifts. To see finiteness uniformly over a top vector, normal-order each of the finitely many generating W state expressions. Positive old-loop modes moved to the right kill T; all remaining nonzero indices have sum bounded by N and there are boundedly many factors. Zero modes preserve old energy and have bounded word length. Thus a functional with finite full-weight support pulls back to finitely many top weights. Equivalently, each finite quotient already has finite old-energy pieces by step 3.2. No unrestricted algebraic dual or infinite product has been substituted. [F2, F4, step 3.2, step 4.3, step 5.1, algebra]

7.1 This map induces an isomorphism on the FIRST page. On the primal associated tail piece its cohomology map is the normalized map from the ordered negative W words on each top CE class to $H^0(K(\mu))$. F2 proved exactly that map is the PBW isomorphism. It is therefore the first-page isomorphism of step 4.2, not just some abstract isomorphism between vector spaces of equal dimension. By induction $E_{s+1}=H(E_{s},d_{s})$, the constructed spectral map is an isomorphism on EVERY page $s\ge 1$, commuting with $d_{s}$. On the target, exact induction and finite old-energy duality commute with taking page cohomology. Starting at $E_1$ its top Z action is the common scalar $\gamma_{\bar{\lambda}}$ by F3 and remains so on every subquotient. Consequently, on every page, $E_{s}(X)=D_{W}(M_{W}(\gamma_{\bar{\lambda}}))$ tensor $E_{s}(T^{*})$, $d_{s}=1$ tensor $d_{s}$, as actual W modules and differentials. [F2, F3, step 3.3, step 4.2, step 4.3, step 5.1, step 6.1, algebra]

8.1 The top complex $T^{*}$ is the actual finite dual-Verma Whittaker homology complex, with the pinned sign from F4. Its cohomology is $C_{\gamma_{\bar{\lambda}}}$ in total degree zero and zero otherwise by F3. Its first page is finite: it is supported on the finite dot-Weyl orbit from F3. Thus its limiting page has exactly one one-dimensional bidegree $(r_0,−r_0)$, and every other bidegree is zero. step 7.1 gives exactly one nonzero bidegree for $E_{\mathrm{infinity}}(X)$, occupied by $D_{W}(M_{W}(\gamma_{\bar{\lambda}}))$. Therefore all nonzero-total-degree cohomology of X vanishes. Its $H^0$ has only one nonzero filtration quotient. Since the filtration is separated below and exhaustive, this quotient is $H^0$ itself, so no unresolved extension remains. It is W-isomorphic to the asserted graded dual Verma, with its specified top line. [F3, F4, step 4.1, step 7.1, algebra]

9.1 The full-to-cyclic restricted-dual retraction of step 3.1 and the signed physical-minus bridge F4 now identify this result with the actual minus DS cohomology of $M_{\mathrm{aff}}(\lambda)^{*}$. They preserve old energy and the normalized top. The bound signed bridge F4 therefore proves the actual physical-minus Statement. No inference used the cohomology of the full plus complex itself, whose acyclicity is compatible with this argument and cannot be transposed to these restricted duals. [F4, step 3.1, step 8.1, algebra] ∎

## Proof status

Research carrier, ready for an exact frozen offer; not adopted or independently accepted. Its concrete cone contraction, restricted-dual filtration and actual every-page negative-W-mode comparison are given above. The complementary K/ordinary-Verma carrier is bound at SHA256 `086c833d77b157fa186954837000e47d41c08113b2259ca5c3df9dc797a5149e`; its finite Whittaker input is an explicit separate prerequisite, not a citation-as-proof. The signed physical-minus/opposite-character bridge F4 is bound to its actual corrected construction. The finite-category-O Whittaker result is likewise bound to its concrete carrier in F3. No production registration, native readiness or final gates are asserted.
