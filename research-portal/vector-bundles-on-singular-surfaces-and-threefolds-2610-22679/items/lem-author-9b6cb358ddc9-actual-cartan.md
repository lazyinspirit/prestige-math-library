---
id: lem-author-9b6cb358ddc9-actual-cartan
kind: lemma
title: Actual perfect Cartan through degree three on all qcqs field-schemes
status: published
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-local-chains
  - thm-author-3cde9692a7e9-universal-grass-input
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-32887006bdff-em-p1-model
  - prop-chern-whitney-identities
  - prop-motivic-projective-bundle-formula
  - math:def-axiom-of-choice
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - thm-author-3cde9692a7e9-plus-model-input
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
  - lem-consumer-da2bbd48d3ba-binary-k-stack-detection
dependency_roles:
  lem-author-9b6cb358ddc9-local-chains: mathematical-premise
  thm-author-3cde9692a7e9-universal-grass-input: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-a8be8a17c858-negative-model-coefficients: mathematical-premise
  thm-author-3cde9692a7e9-plus-model-input: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-consumer-da2bbd48d3ba-binary-k-stack-detection: mathematical-premise
formulation_deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-9b6cb358ddc9-local-chains
  - lem-author-32887006bdff-em-p1-model
  - prop-motivic-projective-bundle-formula
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-9b6cb358ddc9-local-chains
  - thm-author-3cde9692a7e9-universal-grass-input
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-32887006bdff-em-p1-model
  - prop-chern-whitney-identities
  - prop-motivic-projective-bundle-formula
  - math:def-axiom-of-choice
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - thm-author-3cde9692a7e9-plus-model-input
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
  - lem-consumer-da2bbd48d3ba-binary-k-stack-detection
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 24
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. For every qcqs field-scheme $X$, the actual perfect K-space Chern operations satisfy coefficientwise Cartan through degree three as derived sheaf-map identities. In particular, for $x,y\in K_0^{\rm Perf}(X)$,
$$c_j(x+y)=\sum_{a+b=j}c_a(x)c_b(y)\quad(1\leq j\leq3),\qquad c_0=1.$$
Their constant terms are one and their positive coefficients vanish on zero. Formal inversion is valid through this degree. The same argument proves every fixed finite degree, without asserting a stronger unspecified coherent total-series map.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]]. Use compatible universes in the closure convention of [[math:def-grothendieck-universe-closure-convention]], with $\omega$ in the data universe and the fixed site-size bounds of the supplied constructions. Existence of these universes is assumed separately from Choice. These are the inherited bounds of the projective-bundle, actual-model, Whitney, universal-operation, free-class and local-chain premises, and the ordinary binary K-stack comparison, used in steps 1.1–5.1; in particular they apply to the negative coefficients and bounded-weight stabilization in step 2.1.

[F1] [[lem-author-32887006bdff-em-p1-model]] supplies the actual non-$\mathbb A^1$ EM ring spectrum over every qcqs field-scheme $X$, its coefficient products and diagonal identification. [[thm-author-3cde9692a7e9-universal-grass-input]] supplies the actual Grass/Vect comparison over such a base, also on products, and its bounded-weight stabilization with no phantom term, as established in its Proof 1.1–4.1. Here $\mathrm{Vect}_n$ is the space-valued sheaf classifying finite locally free rank-$n$ bundles and their isomorphisms. Its finite Grassmannian approximations $G(n,N)=\operatorname{Gr}_n(\mathcal O_X^N)$ classify rank-$n$ locally free quotients of the trivial rank-$N$ bundle; the comparison classifies the universal quotient. The variables $c_r$ have bidegree $(2r,r)$ and are the actual universal bundle classes, rather than merely abstract polynomial generators.

[F2] [[prop-chern-whitney-identities]] supplies actual bundle Whitney on all qcqs field-schemes. [[thm-author-d026a7b99ace-universal-chern-space]] constructs the specified pointed perfect K-space operations from those actual stable universal bundle maps, projects away trivial integer rank, and gives the canonical map from each global perfect K-space into the ordinary sheafified model, with an optional further stalkwise localization. Its construction applies on both the smooth big Zariski site and the small Zariski site, with the actual coefficient restrictions. Before that optional localization the positive target is the actual coefficient sheaf $Y_r(U)=\Omega^\infty H(\mathbb Z(r)_{\mathrm{mot}}(U)[2r])$; $H$ denotes Eilenberg–Mac Lane realization and the bracket denotes cochain shift. Write $\mathcal K^{\mathrm{ord}}$ for the ordinary sheafified perfect K-space, identified with the K-theory stack by the supplier's full affine comparison. These actual coefficient values are retained on the smooth big site and on its restriction to opens. They are distinguished from the native derived target in [F3]. The convention $c_0=1$ is an unpointed constant unit, separate from the pointed positive operations. [[prop-motivic-projective-bundle-formula]] supplies the actual unital bigraded motivic cup-product ring, with sign $uv=(-1)^{ac}vu$ for first degrees $a,c$, as part of its projective-bundle contract under [A1]. Its zero extension of negative weights is distinct from the represented-model calculation: [[lem-adjudicate-a8be8a17c858-negative-model-coefficients]] supplies vanishing of the actual represented coefficients in every negative weight and every cohomological degree.

[F3] [[lem-author-9b6cb358ddc9-local-chains]] supplies small-Zariski detection without dimension assumptions. Write $\mathcal K$ for the chosen local perfect K-space model and $j:\underline{\mathbb Z}\times BGL\to\mathcal K$ for its actual free-class map, with locally constant integer ranks. Precomposition with $j\times j$ detects homotopy classes of maps into each native derived target $A_r^{\mathrm{der}}$. The supplier's derived free-chain/abelian-target adjunction applies to maps of spaces, without assuming additivity of the operation being tested. Concretely $A_r^{\mathrm{der}}(U)=\Omega^\infty H(R\Gamma_{\mathrm{Zar}}(U,\mathbb Z(r)_{\mathrm{mot}}[2r]))$, with derived sections in the category of abelian sheaves on the small site. A derived sheaf-map identity here means equality of homotopy classes in that derived mapping space; it retains descent data. For the original global space, $K_0^{\mathrm{Perf}}(X)=\pi_0\Omega^\infty K_{\mathrm{Perf}}(X)$, with addition induced by direct sum. The actual global operations use [F2]'s unit into $\mathcal K^{\mathrm{ord}}$ and the actual values $Y_r(X)$. No identification of these values with $A_r^{\mathrm{der}}(X)$ is assumed.

[F4] [[thm-author-3cde9692a7e9-plus-model-input]] supplies the actual free-object/addition comparison, explicitly including the small Zariski site as well as the smooth sites, with the same local replacement as [F2]. Here $BGL=\operatorname{colim}_n BGL_n$ under adding a trivial line, $GL_n$ is the automorphism group of the free rank-$n$ bundle, and $B$ is its classifying space. For block sum $\boxplus$ on $\underline{\mathbb Z}\times BGL$, with integer ranks added, and actual local K-space addition $\mu$, its direct-sum comparison gives $j\circ\boxplus\simeq\mu\circ(j\times j)$. Its natural full affine comparison preserves the actual object maps and direct sum before local replacement. Thus the bundle restrictions in step 1.1 and the stabilized free-class comparison in step 3.1 use the same addition. No change from Nisnevich detection to Zariski detection is being inferred: detection on the latter site is precisely [F3].

[F5] [[math:def-quasi-compact-and-quasi-separated-scheme]] fixes qcqs: the underlying space is quasi-compact and intersections of affine opens are quasi-compact. [[math:def-smooth-morphism-schemes]] fixes smoothness of the test schemes over $X$. A field-scheme here has a specified morphism $X\to\operatorname{Spec}k$ for some field $k$. Use the smooth qcqs big site over $X$: its objects are smooth $X$-schemes with qcqs underlying scheme, its arrows are $X$-morphisms, and its covers are open-immersion families whose images cover the target. Use this site for the universal bundle calculation, and the small Zariski site, represented on its quasi-compact open basis with open covers, for [F3]. Restricting the specific natural constructions of [F1]–[F2] along open immersions gives their small-site maps and homotopies. This does not extend an arbitrary small-site map to the big site.

[F6] [[lem-consumer-da2bbd48d3ba-binary-k-stack-detection]] supplies ordinary smooth-big-Zariski detection by $u\times u:B_\infty\times B_\infty\to\widetilde{\mathcal K}^{\mathrm{ord}}\times\widetilde{\mathcal K}^{\mathrm{ord}}$ into the actual target $Y_r$. Here $\widetilde{\mathcal K}^{\mathrm{ord}}$ is the rank-zero fiber and $u$ is the reduced bundle object map. Its hypotheses hold for the actual model of [F1]: orientation, PBF and the ambient coefficient compactness are those discharged by the universal Grass supplier. The elementary-excision qualification follows from its oriented PBF model, as required by the binary supplier. This mapping-space comparison applies before optional hypercompletion and does not assume the tested operation is additive.

## Proof
**Given:** $X$ qcqs over a field, the specified actual operations, Choice and the stated size bounds [A1].

**Goal:** Prove the map identity in its full qcqs scope, retaining the actual sites, coefficient products and addition comparison.

1.1 Fix $1\leq d\leq3$. On the smooth big Zariski site of [F5], form the Cartan-difference map $D_d=c_d\circ\mu-\sum_{a+b=d}(c_a\circ\operatorname{pr}_1)\cup(c_b\circ\operatorname{pr}_2)$ from $\mathcal K^{\mathrm{ord}}\times\mathcal K^{\mathrm{ord}}$ to $Y_d$, using the abelian target for subtraction and the actual coefficient products for the sum. The indices $a,b$ are nonnegative, and $c_0$ is the unit convention in [F2]. The actual bundle object maps and their direct-sum comparison in [F2] and [F4] identify its restriction to $\mathrm{Vect}_n\times\mathrm{Vect}_m$ with the bundle Whitney difference. On every product of finite Grassmannian approximations that difference is zero by [F2]. These approximations are smooth qcqs over $X$; no finite-type hypothesis on $X/k$ is needed. The actual universal-coordinate comparison in [F1] detects this zero map class on the product stacks. [A1, F1, F2, F4, F5]

2.1 Stabilize both ranks. For mapping homotopy degree $u=0,1$, a monomial of total Chern weight $w$ has coefficient $\mathcal E_X^{2(d-w)-u,d-w}(X)$, zero for $w>d$ by the actual negative-coefficient calculation in [F2]. The finite-basis ranges $N-n\geq d$ and $M-m\geq d$ include all possibly surviving monomials, and both ranks $n,m\geq d$ include all their variable indices. The stabilization and no-phantom argument supplied in [F1] therefore applies: the mapping $\pi_0$ and $\pi_1$ transition systems are eventually isomorphisms, and the possible inverse-limit kernel $\lim^1\pi_1$ is zero. Consequently step 1.1 gives zero on $B_\infty\times B_\infty$ in the ordinary smooth-big-Zariski category. This is the bounded-weight consequence with its tower argument in the declared universal-comparison supplier, and uses no continuity of motivic complexes. [A1, F1, F2, step 1.1]

3.1 First prove the identity with the actual coefficient values. On the ordinary smooth big site, [F2] makes $D_d$ invariant under translation by the trivial integer rank in either variable. The rank section and actual addition comparison in [F4] therefore identify it with the pullback of its restriction to $\widetilde{\mathcal K}^{\mathrm{ord}}\times\widetilde{\mathcal K}^{\mathrm{ord}}$. Pulling that restriction back along $u\times u$ is the stabilized bundle difference of step 2.1, hence is nullhomotopic. The ordinary mapping-space detection in [F6] makes the restriction, and therefore $D_d$ itself, nullhomotopic. Evaluate this ordinary-site homotopy at its terminal object $X\to X$ and precompose with the canonical perfect-space unit of [F2]. The target is precisely $Y_d(X)$, whose component group is the actual $H^{2d,d}_{\mathrm{mot}}(X,\mathbb Z)$, so it proves the displayed formula for all perfect $K_0$ classes. The source unit and addition agree by [F4]. This step never evaluates a stalkwise replacement as if it had the original coefficient values. [A1, F1, F2, F4, F5, F6, step 2.1]

4.1 Retain also the native derived-map argument. Restrict the specific stabilized bundle nullhomotopy of step 2.1 along opens, then apply the stipulated local replacements to source and target. Precompose with the canonical map from the small-site colimit of the restricted finite-rank bundle stacks to the restriction of their big-site colimit, in each factor. Its composite into the local perfect model is the actual reduced free-class map of [F3]–[F4]. Rank translation and their addition square therefore give zero after $j\times j$ on every integer component. This comparison uses the canonical colimit map, without assuming restriction preserves that colimit. Detection in [F3] now gives $D_d=0$ into $A_d^{\mathrm{der}}$ as a native derived sheaf-map class, retaining descent data. Thus both the native identity and the actual global identity of step 3.1 hold, without a global bundle-difference representation. [A1, F2, F3, F4, F5, step 2.1, step 3.1]

5.1 Pointedness in [F2] gives $c_r(0)=0$ for $r>0$, while $c_0=1$ by convention. The diagonal ring $R=\bigoplus_{r\geq0}H^{2r,r}_{\mathrm{mot}}(X,\mathbb Z)$ is commutative: its product sign in [F2] is $(-1)^{(2r)(2s)}=1$. A truncated series means an element of $R[t]/(t^{N+1})$, with multiplication given by finite coefficient convolution. For $C=1+\sum_{r=1}^N a_rt^r$, define $b_0=1$ and $b_n=-\sum_{r=1}^n a_rb_{n-r}$ for $1\leq n\leq N$. Comparing each coefficient proves $C(\sum_{n=0}^N b_nt^n)=1$ in this quotient; the same recurrence forces uniqueness, and commutativity makes it a two-sided inverse. Taking $N=3$ and applying step 3.1 to $x+(-x)=0$ identifies the truncated series for $-x$ with this inverse. Finally the argument in steps 1.1–3.1 works with any prescribed finite $N$ replacing three, since [F1]–[F2] provide all weights and the same bounded-weight argument. This gives every fixed finite degree, without selecting a coherent total-series enhancement. [A1, F1, F2, step 3.1, algebra] ∎
