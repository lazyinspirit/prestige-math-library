---
dependency_level: 2
id: thm-continuous-lyndon-hochschild-serre-spectral-sequence
kind: theorem
title: "The continuous Lyndon–Hochschild–Serre spectral sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-finite-products-of-compact-spaces
  - lem-continuous-profinite-cochains-commute-with-directed-colimits
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - thm-lyndon-hochschild-serre-spectral-sequence
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes
  - thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent
  - thm-the-bar-cochain-complex-computes-derived-group-cohomology
  - def-profinite-group-by-inverse-limit
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence
  - def-dependent-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-module-categories-have-enough-injectives
  - thm-cartan-eilenberg-injective-resolutions-exist
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition, Chapter I Theorem0.3 and Example0.7, printed pp.5–7"
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
    - title: "J. S. Milne, Class Field Theory v4.03, Chapter II §4, Propositions4.2 and4.4, printed pp.86–88"
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

Let $\Gamma$ be a profinite group, let $N\trianglelefteq\Gamma$ be closed and normal, put $Q=\Gamma/N$, and let $M$ be a discrete continuous left $\Gamma$-module. The following conclusion holds under either of these conventions:

- the Axiom of Choice, with its consequence Dependent Choice;
- explicit compactness of $\Gamma$, Dependent Choice for the supplied cohomology convention, and supplied finite LHS resolution and comparison data for the finite systems used below, functorial from their $E_2$ pages and on their filtered targets.

In the second branch the simultaneous finite-system data are an explicit premise, not a consequence asserted from DC alone. In the first branch no extra supplied-model hypothesis is imposed.

Conjugation and the coefficient action give $H^q_{\mathrm{cts}}(N,M)$ a discrete continuous $Q$-module structure, with $N$ acting trivially. There is a natural first-quadrant cohomological spectral sequence

$$E_2^{p,q}=H^p_{\mathrm{cts}}\bigl(Q,H^q_{\mathrm{cts}}(N,M)\bigr)\Longrightarrow H^{p+q}_{\mathrm{cts}}(\Gamma,M),\qquad d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}.$$

Convergence means a finite decreasing filtration $F^0H^n=H^n$, $F^{n+1}H^n=0$, with $F^pH^n/F^{p+1}H^n\cong E_\infty^{p,n-p}$. The edge maps are the actual continuous-cochain inflation and restriction

$$H^n_{\mathrm{cts}}(Q,M^N)\longrightarrow H^n_{\mathrm{cts}}(\Gamma,M)\longrightarrow H^n_{\mathrm{cts}}(N,M)^Q.$$

Naturality includes a continuous homomorphism $\phi:\Gamma\to\Gamma'$ carrying $N$ into a closed normal subgroup $N'$ and an equivariant coefficient map $u:\operatorname{Res}_{\phi}M'\to M$. It induces the usual contravariant restriction/coefficient maps on the $E_2$ page, abutment and edges. No finiteness of the abelian groups $M$ or $H^q_{\mathrm{cts}}(N,M)$ is assumed.

In particular, if $H^1_{\mathrm{cts}}(N,M)=0$, inflation in degree two is injective and its image is the restriction kernel. If also $H^2_{\mathrm{cts}}(N,M)=0$, that inflation is an isomorphism. These conclusions apply to closed nonopen $N$ and to infinite profinite $Q$.

## Statement references

[Milne, *Arithmetic Duality Theorems*, Chapter I Theorem0.3 and Example0.7, printed pp.5–7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Milne, *Class Field Theory*, Chapter II §4, Propositions4.2 and4.4, printed pp.86–88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

The continuous spectral sequence is reconstructed below from the ordinary finite-extension theorem and continuous-cochain comparisons. The first source's continuous theorem is statement provenance, not an imported proof input.

## Facts & Assumptions

**Given:** $\Gamma,N,Q,M$ and one of the two axiom/data conventions in the Statement.

[A1] [[def-axiom-of-choice]], [[def-dependent-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: the AC branch supplies DC, compactness and set-indexed model choices. The other branch supplies compactness and finite-system comparison data explicitly.

[F1] [[def-profinite-group-by-inverse-limit]] and [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]: open normal finite-index subgroups form an identity-neighborhood basis; AC supplies compactness of the inverse limit. [[thm-closed-subspace-of-a-compact-space-is-compact]] applies to closed $N$. [[thm-finite-products-of-compact-spaces]] gives compactness of its finite powers without additional choice.

[F2] [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]] defines normalized continuous cochains and their inhomogeneous differential; discreteness and continuity of an action mean that each element has open stabilizer.

[F3] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]: for a compact profinite $P$ and discrete continuous $A$, $H^n_{\mathrm{cts}}(P,A)=\operatorname*{colim}_{V\trianglelefteq_oP}H^n(P/V,A^V)$, by inflation and coefficient inclusion, under its declared cohomology-data convention.

[F4] [[thm-lyndon-hochschild-serre-spectral-sequence]]: for ordinary group extensions there is a natural strongly convergent first-quadrant LHS spectral sequence with finite target filtration. Naturality includes maps of extensions and coefficient maps; its resolution comparisons preserve the filtration.

[F5] [[lem-filtered-colimits-of-abelian-groups-are-exact]] and [[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]: directed colimits preserve kernels, images, quotients and cohomology, and finitely many representative equalities hold at a common later stage.

[F6] [[lem-continuous-profinite-cochains-commute-with-directed-colimits]]: continuous cochains and cohomology of a compact profinite group commute with small directed systems of discrete continuous coefficient modules, without assuming injective transitions.

[F7] [[thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes]], [[thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent]] and [[thm-the-bar-cochain-complex-computes-derived-group-cohomology]] give the ordinary bar models and their natural identification with the supplied resolution cohomology. The continuous homogeneous formulas and the required inner-action homotopy are given explicitly below.

[F8] [[thm-module-categories-have-enough-injectives]] supplies enough injectives for every group-ring module category under AC. [[thm-cartan-eilenberg-injective-resolutions-exist]] then constructs the finite LHS models and comparisons under DC with the stated ambient-set convention.

[F9] [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]]: the cohomological edges pass from the bottom axis through $F^nH^n$ and from $H^n/F^1H^n$ into the vertical axis.

## Proof

1.1 In either branch $\Gamma$ is compact and Hausdorff, and closed $N$ is compact by [F1]. The quotient $Q$ is a compact Hausdorff group. Here are the finite quotient details needed later. For $U\trianglelefteq_o\Gamma$, put $K_U=NU/N$. This is open normal in $Q$ and $Q/K_U=\Gamma/NU$ is finite. These $K_U$ form an identity-neighborhood basis: for an open subset $O\subseteq\Gamma$ containing $N$, consider all cosets $nV$ with $n\in N$, $V\trianglelefteq_o\Gamma$ and $nV\subseteq O$. They cover $N$. Take a finite subcover; an open normal $U$ inside the finite intersection of its subgroups has $NU\subseteq O$. Distinct cosets of closed $N$ can be separated by such quotients, so $Q$ is Hausdorff. The map $Q\to\varprojlim_U\Gamma/NU$ is an isomorphism: it is injective by that basis, and a compatible family of finite cosets has a common representative by the finite-intersection property in compact $\Gamma$. Its topology is the finite-coordinate topology. The same compatible-coset argument inside compact $N$ identifies $N$ with $\varprojlim_U N/(N\cap U)$, whose finite-coordinate kernels form its relative neighborhood basis. Thus $Q$ and $N$ are compact profinite groups. [A1, F1, given, construct]

1.2 The action on inhomogeneous cochains is $(\gamma c)(n_1,\ldots,n_q)=\gamma\,c(\gamma^{-1}n_1\gamma,\ldots,\gamma^{-1}n_q\gamma).$ It commutes with the differential and preserves continuity and normalization. To prove that inner $N$ acts trivially, use homogeneous cochains $f:N^{q+1}\to M$ with $f(ax_0,\ldots,ax_q)=a f(x_0,\ldots,x_q)$. The conversions are $c(n_1,\ldots,n_q)=f(1,n_1,n_1n_2,\ldots,n_1\cdots n_q)$ and $f(x_0,\ldots,x_q)=x_0c(x_0^{-1}x_1,\ldots,x_{q-1}^{-1}x_q)$; both are continuous and identify the differentials by finite substitution. For $a\in N$, inner action on $f$ is right translation of every $x_i$ by $a$. On homogeneous bar symbols define $P_a[x_0,\ldots,x_j]=\sum_{i=0}^j(-1)^i[x_0,\ldots,x_i,x_ia,x_{i+1}a,\ldots,x_ja].$ Deleting vertices gives $\partial P_a+P_a\partial=R_a-1$: the first and last deletions give the two endpoint tuples and every other deletion cancels with the corresponding adjacent term. This homotopy is left $N$-equivariant. On degenerate tuples, all terms are degenerate except a pair with opposite signs, so it descends to normalized bar symbols. Dualizing yields a continuous cochain homotopy between inner action and the identity, because every formula is a finite sum of continuous substitutions. Thus inner $N$ acts trivially on cohomology, including degree zero. [F2, F7, construct, algebra]

2.1 Order open normal $U\subseteq\Gamma$ by reverse inclusion, and write $N_U=N/(N\cap U),\qquad \Gamma_U=\Gamma/U,\qquad Q_U=\Gamma/NU,\qquad M_U=M^U.$ There is an exact finite extension $1\to N_U\to\Gamma_U\to Q_U\to1$, with $M_U$ a $\Gamma_U$-module. For $V\subseteq U$, quotient maps of these extensions and $M_U\hookrightarrow M_V$ give transition maps of their ordinary LHS sequences by [F4]. In the AC branch [F8] supplies each required model, and AC chooses models for this set of indices and the needed comparisons; witness sets can first be bounded by Collection. The maps are canonical from $E_2$ and on filtered targets by [F4], so identities and composites agree there even when chosen chain comparisons do not strictly compose. In the compact/DC branch these finite-system data are precisely the supplied premise. Thus in both branches this is an actual directed system of pages from $E_2$ onward and filtered abutments, not a claimed strictly compatible system of unspecified resolutions. [A1, F1, F4, F8, step 1.1, construct]

3.1 Every normalized continuous cochain $c:N^q\to M$ is inflated from a cochain $N_U^q\to M^U$ for some $U$. For $q>0$ compactness of $N^q$ gives finite image. Using continuity and the ambient open-normal basis, the rectangles of cosets of $N\cap V$ with $V\trianglelefteq_o\Gamma$ lying in constant fibres form an open cover of $N^q$. Take a finite subcover and intersect its finitely many $V$ and choose an ambient open normal subgroup inside the stabilizers in $\Gamma$ of the finitely many values. Their intersection $U$ makes $c$ constant on coordinatewise $N\cap U$ cosets and all its values $U$-fixed. Normalization descends because an identity quotient coordinate can be lifted as the identity. For $q=0$ just take an ambient open normal subgroup stabilizing the chosen value. Equality of two inflated cochains holds on a common ambient refinement since $N\to N_U$ is onto. Hence there is a degreewise cochain isomorphism $\operatorname*{colim}_U C^\bullet(N_U,M_U)\cong C^\bullet_{\mathrm{cts}}(N,M).$ The differentials agree termwise, and [F5, F7] give $A:=H^q_{\mathrm{cts}}(N,M)=\operatorname*{colim}_U A_U$, where $A_U=H^q(N_U,M_U)$. This also proves explicitly the ambient cofinality needed for closed nonopen $N$; the coefficients need not be finite. [F1, F2, F5, F7, step 1.1, step 2.1, construct, algebra]

3.2 The finite LHS edge maps can be identified without an extra continuous theorem. For inflation compare the extension with the trivial-kernel extension $1\to1\to Q_U\to Q_U\to1$, using $\Gamma_U\to Q_U$ and $M_U^{N_U}\hookrightarrow M_U$. The source sequence has only its bottom row. By [F4], the $E_2$ map on that row is the identity and the target map is ordinary pullback/coefficient inflation; filtered naturality therefore identifies the target map with the bottom edge [F9]. For restriction compare with $1\to N_U\to N_U\to1\to1$, using the subgroup inclusion and the identity coefficient map. Its target sequence has only its vertical column; the $E_2$ map on that column is the inclusion of quotient-invariant classes. Thus its target map, ordinary cochain restriction, is the vertical edge into those invariants. These conclusions follow from maps of finite extensions, not a presumption that the axis edge is an isomorphism. [F4, F7, F9, step 2.1, algebra]

4.1 At stage $U$, the same formulas give a $\Gamma/U$-action on $A_U$. Indeed $U$ fixes $M_U$, and conjugation by $u\in U$ acts trivially on $N_U$ since its commutators with $N$ lie in $N\cap U$. Inner $N_U$ acts trivially on cohomology by step 1.2. The action therefore factors through $Q_U$, agreeing with the ordinary LHS quotient action by the natural bar/resolution comparison in [F4, F7]. More explicitly, the conjugation formula is the restriction/coefficient map for the conjugation automorphism of the extension, and the natural comparison identifies that map on both models. All transitions $A_U\to A_V$ are equivariant. Each class of $A$ has a representative at a stage $U$ and is then fixed by the open subgroup $K_U$ of $Q$. Hence the induced discrete $Q$-module $A$ is continuous and its action is exactly the cochain action of step 1.2. No finiteness of $A_U$ was used. [F2, F4, F7, step 2.1, step 3.1, step 1.2, algebra]

5.1 By [F6], $H^p_{\mathrm{cts}}(Q,A)=\operatorname*{colim}_U H^p_{\mathrm{cts}}(Q,A_U)$. For fixed $U$, apply [F3] to $Q$ with coefficients $A_U$. Restrict to open normal $V\subseteq K_U$, a cofinal family; then $(A_U)^V=A_U$. This gives $H^p_{\mathrm{cts}}(Q,A)=\operatorname*{colim}_{(U,V),\ V\subseteq K_U} H^p(Q/V,A_U).$ The diagonal pairs $(W,K_W)$ are cofinal. Given $(U,V)$, the inverse image of $V$ in $\Gamma$ is open normal and contains $N$. Choose an ambient open normal $W\subseteq U$ inside that inverse image. Then $K_W\subseteq V$, and inflation with $A_U\to A_W$ moves that representative to the diagonal. Finitely many such moves or equality constraints admit a common refinement. Thus the eventual-equality criterion [F5] proves both surjectivity and injectivity of the diagonal colimit comparison. Consequently $\operatorname*{colim}_U H^p(Q_U,A_U)=H^p_{\mathrm{cts}}(Q,H^q_{\mathrm{cts}}(N,M)).$ All maps are the actual inflation/coefficient maps, not an identification of abstract isomorphic groups. [F3, F5, F6, step 1.1, step 3.1, step 4.1, construct, algebra]

6.1 For $r\geq2$ define $E_r^{p,q}=\operatorname*{colim}_U E_{r,U}^{p,q}$ from the finite LHS system, with its induced differential. Exactness [F5] identifies its next page with the kernel modulo image of that differential, since $E_{r+1,U}=H(E_{r,U},d_{r,U})$. Step 5.1 identifies $E_2$ with the required continuous page. The targets are $H_U^n=H^n(\Gamma_U,M_U)$; [F3] gives $\operatorname*{colim}_U H_U^n=H^n_{\mathrm{cts}}(\Gamma,M)$. These identifications respect the finite transition maps of step 2.1. [F3, F4, F5, step 2.1, step 5.1, construct]

7.1 Let $F_U^pH_U^n$ be the finite LHS filtration. Exactness of colimits identifies $F^pH^n:=\operatorname*{colim}_U F_U^pH_U^n$ with a subgroup of $H^n=\operatorname*{colim}_U H_U^n$ and its adjacent quotient with $\operatorname*{colim}_U E_{\infty,U}^{p,n-p}$. At bidegree $(p,q)$, outgoing differentials vanish for $r>q+1$ and incoming ones for $r>p$, so every finite system and the colimit stabilize by the same bound $r>\max(p,q+1)$. Therefore the last displayed colimit is $E_\infty^{p,n-p}$ of step 6.1. The finite filtrations have $F_U^0H_U^n=H_U^n$ and $F_U^{n+1}H_U^n=0$, giving the asserted endpoints after taking colimits. Thus convergence is strong with a finite filtration; no interchange of a nonuniform infinite stabilization or an inverse limit is being assumed. [F4, F5, step 6.1, algebra]

8.1 For a continuous map of extensions $\phi$ and coefficient map $u$ as in the Statement, given $U'\trianglelefteq_o\Gamma'$ choose $U\trianglelefteq_o\Gamma$ contained in $\phi^{-1}U'$. This gives a map of finite extensions from $(N_U,\Gamma_U,Q_U)$ to the primed system. Equivariance sends $(M')^{U'}$ into $M^U$. Ordinary naturality [F4] therefore gives a spectral-sequence map from the primed stage to this unprimed stage. Any two such choices agree after a common refinement; identity and composite maps agree from $E_2$ and on filtered targets by [F4]. Passing to colimits gives naturality of the continuous sequence. The cochain comparisons in steps 3.1 and 5.1 use pullback and coefficient maps, so its $E_2$ and target maps are precisely the continuous restriction/coefficient maps. This also verifies the action compatibility asserted in step 4.1. [F2, F4, F5, step 2.1, step 3.1, step 4.1, step 5.1, step 7.1, construct]

8.2 Taking colimits in step 3.2 gives the literal continuous inflation and restriction formulas by steps 3.1 and 5.1 and their cochain comparisons. In particular $M_U^{N_U}=M^{NU}$, whose directed union is $M^N$: for $m\in M^N$ its open stabilizer in $\Gamma$ contains some $U$, so $m\in M^{NU}$. The $q=0$ instance of step 5.1 identifies the inflation domain with $H^n_{\mathrm{cts}}(Q,M^N)$. The $p=0$ instance identifies the restriction codomain with $H^n_{\mathrm{cts}}(N,M)^Q$, including the invariants through the coefficient colimit comparison rather than assuming invariants commute with arbitrary colimits without compactness. The filtration kernel and image in [F9] survive by [F5]. This proves the asserted continuous edge descriptions. [F2, F5, F6, F9, step 3.1, step 5.1, step 7.1, step 3.2, algebra]

9.1 If $H^1_{\mathrm{cts}}(N,M)=0$, every $E_2^{p,1}$ vanishes. At $(2,0)$ the only possible incoming differential is from $(0,1)$ on page2, so $E_\infty^{2,0}=E_2^{2,0}$ and inflation is injective. Also $E_\infty^{1,1}=0$, giving $F^1H^2=F^2H^2$. By the restriction edge in step 8.2, its kernel is $F^1H^2$, while the inflation image is $F^2H^2$. If also $H^2_{\mathrm{cts}}(N,M)=0$, then $E_2^{0,2}=0$ and $F^0H^2=F^1H^2=F^2H^2$, so inflation is onto. Zero coefficients and $N=1$ or $Q=1$ give respectively zero pages or one-axis sequences, consistently with these same finite-filtration arguments. This completes the theorem under both stated conventions. [F9, step 7.1, step 8.2, algebra] ∎
