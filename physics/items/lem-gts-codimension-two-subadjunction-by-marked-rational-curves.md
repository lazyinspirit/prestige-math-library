---
id: lem-gts-codimension-two-subadjunction-by-marked-rational-curves
kind: lemma
title: Codimension-two subadjunction from explicit marked rational models
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-proper-pushforward-coherent
- thm-leray-spectral-sequence-for-sheaf-cohomology
- thm-serre-vanishing
- lem-projection-formula-invertible-twist
- lem-eventual-global-generation-coherent-twists
- thm-normal-functions-codimension-one-intersection
- lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing
- lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity
- lem-gts-curvette-extraction-and-effective-cyclic-different
- thm-resolution-of-singularities-in-characteristic-zero
- thm-principalization-of-ideals
- thm-cohomology-and-base-change
- thm-normalization-finite-birational-surjective
- thm-bertini-smooth-hyperplane-section
- def-axiom-of-choice
- def-dependent-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Kawamata, Subadjunction of log canonical divisors for a subvariety of codimension 2
    url: https://arxiv.org/pdf/alg-geom/9511015v1
    locator: 'arXiv:alg-geom/9511015v1, complete printed pp. 1–7 read: Theorem 1; §1 Lemmas 2–3, Theorems 4 and
      6; proof of Theorem 1 p. 6. The affine klt replacement is not imported projectively.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-codimension-two-subadjunction-by-marked-rational-curves.md
dependency_level: 5
dependency_roles:
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  thm-leray-spectral-sequence-for-sheaf-cohomology: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  lem-projection-formula-invertible-twist: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-normal-functions-codimension-one-intersection: mathematical-premise
  lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing: mathematical-premise
  lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity: mathematical-premise
  lem-gts-curvette-extraction-and-effective-cyclic-different: mathematical-premise
  thm-resolution-of-singularities-in-characteristic-zero: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  thm-normalization-finite-birational-surjective: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
---

## Statement

Assume AC. Let X be smooth projective complex of dimension three or four, or a normal projective Gorenstein terminal threefold with isolated singularities. Let G be an effective rational divisor and $\mu :Y\to X$ a supplied smooth projective log resolution with $K_Y+E+F=\mu *(K_X+G)$, E a single smooth coefficient-one exceptional prime, every coefficient of F strictly below one, and SNC total boundary. Assume $W=\mu (E)$ has codimension two and is the sole non-klt centre. Retain an actual effective exceptional rational T with -T relatively ample on this resolution and, over $X_{\mathrm{regular}}$, a finite smooth-centre blowup factorization; no arbitrary small resolution is allowed. Then W is normal and there is a smooth projective birational $\nu :V\to W$ and rational divisors Delta,M with $K_V+\Delta +M\sim_{\mathbb Q}  \nu *((K_X+G)|W)$, Delta SNC with all coefficients below one, $\nu _*\Delta $ effective, and M effective and curve-nef. The ambient restriction on the right is a rational line bundle; no Cartier assertion about $K_W$ is needed. Negative Delta coefficients can occur only on nu-exceptional curves.

## Statement references

[[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]]

[[lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity]]

[[lem-gts-curvette-extraction-and-effective-cyclic-different]]

[[thm-resolution-of-singularities-in-characteristic-zero]]

[[thm-principalization-of-ideals]]

[[thm-cohomology-and-base-change]]

[[thm-normalization-finite-birational-surjective]]

[[thm-bertini-smooth-hyperplane-section]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[thm-proper-pushforward-coherent]]

[[thm-leray-spectral-sequence-for-sheaf-cohomology]]

[[thm-serre-vanishing]]

[[lem-projection-formula-invertible-twist]]

[[lem-eventual-global-generation-coherent-twists]]

[[thm-normal-functions-codimension-one-intersection]]

## Facts & Assumptions

**Given:** Exactly the Statement data. AC and DC, where inherited by the actual supplied cohomology/base-change constructions, are retained.

[F1] The exact earlier suppliers in Statement references provide only their stated interfaces. All additional constructions are explicit in the proof; the source references attribute the established theorem family and do not replace any proof.

[F2] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] gives smooth projective SNC adjoint vanishing. [[thm-proper-pushforward-coherent]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[thm-serre-vanishing]], [[lem-projection-formula-invertible-twist]] and [[lem-eventual-global-generation-coherent-twists]] give coherent higher images, Leray, large-ample-twist vanishing, the higher-image projection formula and eventual generation. [[thm-normal-functions-codimension-one-intersection]] gives extension of functions without codimension-one poles on the normal ambient X. These interfaces are used directly in the general relative-vanishing construction below; no Fano or index hypothesis is imported from the more specialized nonvanishing conclusion.

## Proof

1.1 On the selected smooth resolution write [given, F1, construct, algebra]

1.2 $K_Y+E+F=\mu *(K_X+G)$, all $\operatorname{coeff}(F)<1$. [given, F1, construct, algebra]

1.3 Put $P=\operatorname{ceil}(-F)$ and $D=P-E=\operatorname{ceil}(-(E+F))$. Since G is effective, negative coefficients of F occur only on exceptional divisors; thus P is effective exceptional and contains no E. A rational function in $\mu _*O_Y(D)$ has no pole at any codimension-one point of the normal X, so [F2] makes it regular. The sole negative coefficient of D is -1 along E. For a regular function, positive E-valuation is equivalent to vanishing at the generic point of its centre W, hence to membership in the reduced ideal $I_W$. Conversely every function in $I_W$ pulls back with positive E-valuation. Therefore $\mu _*O_Y(D)=I_W$, and the same normal-function argument gives $\mu _*O_Y(P)=O_X$. Here is relative vanishing at this actual mu without a Fano assumption. Choose an ample Cartier divisor A on X and set $\Theta =E+F+D=F+P$; its coefficients lie in [0,1) on the supplied SNC exceptional/boundary support. Choose a fixed sufficiently small rational $\epsilon >0$ so that Theta+epsilon T still has all coefficients below one. The relative-ample twisting construction in the isolated-centre supplier uses only the projective mu and its supplied -T relative ampleness: after clearing denominators a power of $O_Y(-T)$ embeds over X in a coherent projective bundle, and twisting its coherent generators by sufficiently high powers of A gives an absolute projective embedding (combine with a projective embedding of X by the Segre map). Consequently $\mu^*(mA-K_X-G)-\epsilon T$ is ample for every sufficiently large integer m. No numerical proportionality of $K_X$ or G to A is needed. The identity $D+\mu^*(mA)=K_Y+(\Theta+\epsilon T)+[\mu^*(mA-K_X-G)-\epsilon T]$ now satisfies the smooth SNC vanishing hypotheses [F2], so $H^q(Y,O_Y(D+\mu *(mA)))=0$ for all $q>0$ and m sufficiently large. Every $R^q \mu _*O_Y(D)$ is coherent by [F2]. For each fixed $q>0$, projection formula, Serre vanishing and Leray identify its sufficiently high twisted global sections with that zero $H^q$ on Y; only finitely many lower direct-image degrees enter total degree q in the first-quadrant sequence. Eventual global generation then forces $R^q \mu _*O_Y(D)=0$. In particular $R^1 \mu _*O_Y(P-E)=0$. Pushing the divisor sequence gives the next displayed residue identity. The argument allows $P=0$ and applies in the normal Gorenstein terminal branch as well, since X is normal, $K_X+G$ is rational Cartier, Y is smooth projective, and the same actual T is supplied. [given, F1, F2, construct, algebra]

1.4 $(\mu |E)_*O_E(P)=O_W$. [given, F1, construct, algebra]

1.5 The natural $O_E\to O_E(P)$ and the pullback of functions from W remove the exceptional twist: $(\mu |E)_*O_E=O_W$. The residue component proves normality directly by pulling back a rational function integral over $O_W$ to the normal E. Flat base change to K(W) and then its algebraic closure gives $H^0(E_{\mathrm{geometric\text{-}generic}},O)$ equals the algebraically closed ground field, so the generic curve is geometrically connected. Generic smoothness makes it geometrically integral. [given, F1, construct, algebra]

1.6 Over the generic point of W the ambient resolution is a finite sequence of point blowups of a smooth transverse surface over K(W). Every exceptional curve is a P1 over the residue field of its blowup centre. Geometric generic connectedness and the constant-field equality force that residue field for E to be K(W), so the generic E-fibre is P1 over K(W), not a curve of unknown genus or a disconnected union. [given, F1, construct, algebra]

1.7 Apply the actual curvette/effective-different supplier to n-2 general projective high-ample cuts of X and the fixed resolution. They avoid the finite singular locus in the terminal case. The finite restricted maps are point blowups, and any negative horizontal coefficient of F|E meets a general selected P1 and retains that coefficient. The effective different on that projective curve forbids it. Thus the geometric generic fibre is P1 after the allowed finite marking extension, and every nonzero horizontal coefficient of $B=F|E$ lies strictly between zero and one. [given, F1, construct, algebra]

1.8 Choose a smooth projective resolution V of W, refine it by the marked-model graph construction, and further resolve the base discriminant support. Resolve the graph of $E\to V$ by blowups of Y with centres in E and resolve the total boundary. These operations preserve the unique coefficient-one place: an SNC blowup meeting E and other subunit boundary components creates a component of coefficient below one. They change the generic transverse fibre only by isomorphism of E and add vertical boundary. We may thus arrange a morphism $f:E\to V$ with smooth E, SNC restricted boundary $B=F|E$, and SNC discriminant support on V. Every coefficient of B remains below one. [given, F1, construct, algebra]

1.9 The rounding identity P|E=ceil(-B) holds at every prime of E. Distinct F-components cannot restrict to the same prime on E, since that would make E and two F-components meet in codimension two in Y, contradicting SNC. Thus rounding commutes with this restriction; it is not an extra unproved compatibility assumption. [given, F1, construct, algebra]

1.10 Adjunction gives the actual global line relation [given, F1, construct, algebra]

1.11 $K_E+B=f*\nu *((K_X+G)|W)$. [given, F1, construct, algebra]

1.12 The right side is meaningful before $K_W$ is known to be Cartier: $(K_X+G)|W$ is the restriction of an ambient rational line bundle. Set $L=\nu *((K_X+G)|W)-K_V$. Then $K_E+B=f*(K_V+L)$, the precise input for the rational-fibration construction. [given, F1, construct, algebra]

1.13 If $f*Q=\sum  w_j B_j$ above a prime Q⊂V, put [given, F1, construct, algebra]

1.14 $\delta_Q=\max_j(b_j+w_j-1)/w_j$, $\Delta=\sum\delta_Q Q$, $M=L-\Delta$. [given, F1, construct, algebra]

1.15 Here all divisors lying above the generic point of Q must be included, with $b_j=0$ when absent from the displayed support. Since $b_j<1$ for vertical divisors, $δ_Q<1$. If at least one $b_j\ge 1−w_j$, then $δ_Q\ge 0$. In the subadjunction application that last assertion comes from the pushforward/residue identity on the centre and is a separate step, not a consequence of the fibration formula alone. [given, F1, construct, algebra]

1.16 On P1 let $D=\sum  d_i P_i$ with distinct marked points, rational $0<d_i\le 1$, and $\sum  d_i=2$. Choose m so that all m $d_i$ are integers. The multiset containing m $d_i$ copies of label i admits a pairing into m pairs of distinct labels. To see this, repeatedly pair occurrences from two currently largest nonempty label groups; a pairing exists exactly when no group has more than half the total occurrences. This condition holds initially because m $d_i\le m$, and the greedy operation preserves feasibility by reducing the two largest groups. Equivalently one can place the groups consecutively in a circle of 2m positions and pair each position with its antipode, shifting the start inside a largest group if necessary. Thus the finite set of valid pairings is nonempty. [given, F1, construct, algebra]

1.17 For distinct i,j there is a unique rational differential $ω_{\mathrm{ij}}$ with simple poles at $P_i,P_j$ and residues +1,−1. In an affine coordinate z it is [given, F1, construct, algebra]

1.18 $ω_{\mathrm{ij}}=(z_i−z_j) dz/((z−z_i)(z−z_j))$. [given, F1, construct, algebra]

1.19 Its divisor is $−P_i−P_j$. For each valid pairing multiply its m differentials; this is a nonzero section of $m(K_P1+D)$, a degree-zero line bundle. Multiply over all valid pairings and square. The square removes orientation signs, and the product over all pairings removes arbitrary pairing choices. The resulting section is unchanged by permutation of equal-weight markings and by projective coordinate changes. It therefore makes sense in families and descends after a finite marking cover by taking a norm if necessary. [given, F1, construct, algebra]

1.20 In a P1-bundle with sections allowed to collide, the same formula remains a regular section of the indicated relative log-canonical line: the poles in z are precisely the marked-divisor factors already allowed in the bundle, and the coefficient $z_i−z_j$ vanishes, rather than acquiring a pole, when two sections meet. Coordinate changes at infinity give the same intrinsic residue differential. Hence the product has no pole above a collision point. [given, F1, construct, algebra]

1.21 Let a semistable fibre be a tree of P1 components carrying the markings. For an edge cutting off a tail T, write α(T) for the total marking weight on that side. Total weight is two. There is a component C0 for which every tail separated from C0 has weight at most one. To find it, start at any vertex and move across an edge whenever the opposite side has weight greater than one. One can never move back, and a finite tree has no cycle, so the process stops. This is the required component. [given, F1, construct, algebra]

1.22 There is a unique vertical rational divisor F, modulo adding the whole fibre, such that $K_{E/V}+D-F$ has degree zero on every fibre component. Its coefficient differences across an edge are determined by α(T)−1. This follows directly by summing intersections over the tail: its relative dualizing degree is −1, its horizontal degree is α(T), and the vertical intersection is the difference of the two adjacent coefficients. Normalize F to have coefficient zero on C0. The tail inequalities then make all coefficients nonnegative. This is the tree calculation that produces the vertical correction; it is not an assumption that the original horizontal divisor remains numerically trivial on a singular fibre. [given, F1, construct, algebra]

1.23 Contract every component of the fibre except C0. On a regular model over a smooth base curve this is a sequence of contractions of (-1)-curves: repeatedly remove an end component distinct from C0; since the semistable fibre has multiplicity one, that component has self-intersection -1. The resulting morphism is a P1-bundle. Horizontal markings from a contracted tail coalesce to a point with combined weight $α(T)\le 1$. The usual smooth blowup formula verifies, one contracted component at a time, [given, F1, construct, algebra]

1.24 $K_{\mathrm{old}/\mathrm{base}}+D_{\mathrm{old}}-F=\mathrm{contraction}^*(K_{\mathrm{new}/\mathrm{base}}+D_{\mathrm{new}})$. [given, F1, construct, algebra]

1.25 The canonical pairing product on the P1-bundle therefore supplies a section of a positive multiple of the corrected log-canonical line on the original model without any pole over the special fibre. This construction handles all special fibres, with a possibly different C0 chosen in each fibre. [given, F1, construct, algebra]

1.26 The local ramification calculation explains why the displayed $δ_Q$ is the right normalization. Let a component upstairs have ramification index $e_j$ and the corresponding base divisor have ramification index $e_Q=e_j w_j$. Under a finite cover the relative canonical coefficients transform by [given, F1, construct, algebra]

1.27 $b_{\mathrm{tilde}}=e_j(b_j−δ_Q w_j)−(e_j−1)+(e_Q−1) =e_j w_j((b_j+w_j−1)/w_j−δ_Q)$. [given, F1, construct, algebra]

1.28 All corrected vertical coefficients are therefore nonpositive, and at least one is zero. On a semistable rational-tree model this is exactly the normalized divisor −F from the preceding calculation. Thus the canonical product defines a rational section of a positive multiple of the pullback of M and has no pole along any base prime. Over a normal base it extends across codimension two, so a positive multiple of M has an effective representative. A finite-cover norm descends that effectivity. [given, F1, construct, algebra]

1.29 To verify nefness, pull the family back to an arbitrary smooth complete curve in the chosen smooth base model, make the finite marking cover, and perform the preceding tree contractions. If its generic fibre is smooth, the canonical product is nonzero generically and regular everywhere, so the corresponding base line has nonnegative degree. If the generic stable fibre is itself a tree, choose a central generic component C0 after a finite cover. Contract its other branches and replace each branch by a marked point carrying its total weight; the tail inequalities make every new coefficient at most one and their sum remains two. The same pairing-product argument now applies to that generic component and its specializations. Degree cannot become negative after the finite cover. Every base curve therefore has nonnegative M-degree. This proves nefness, under the stated availability of the compatible stable marked models and corrected line on that model. [given, F1, construct, algebra]

1.30 Fix $N\ge 3$ labels, and fix the first three marked points at 0,1,infinity on P1. The parameter space of the other labelled positions is $X0=(P1)^{(N-3)}$, with the open subset where all marks are distinct. For a subset I of labels containing at most one of the first three and at least three labels, let $Δ_I$ be the locus where all its positions coincide. If I contains one fixed label, coincidence is with that fixed point; otherwise the common position is free. Thus $Δ_I$ has codimension |I|-1 and is a smooth diagonal. Blow up their successive strict transforms in decreasing order of |I| (any order between centres of equal size). Denote the resulting projective variety by $T_N$. For $|I|=2$, no base blowup is necessary: the diagonal is already a Cartier divisor, whose strict transform is retained as boundary. [given, F1, construct, algebra]

1.31 The needed elementary arrangement fact is the following. Two incompatible clusters I,J (intersecting but neither containing the other) have intersection Δ_(I union J), or empty intersection if their union contains two fixed labels. In the nonempty case that intersection was blown up earlier. Their strict transforms are disjoint: in the projectivized normal bundle of the intersection their two distinct normal subbundles have zero intersection, since the original diagonals meet cleanly and their tangent intersection is exactly the tangent of the common diagonal. Compatible clusters, namely disjoint or nested ones, retain clean intersections. Induction through the blowups therefore makes every centre smooth and makes the boundary intersections correspond to nested/disjoint collections of clusters. [given, F1, construct, algebra]

1.32 Here are the local coordinates verifying that induction and smoothness, rather than assuming a general wonderful-compactification theorem. In an affine coordinate on P1, a collision cluster has coordinates $z_i=z_*+u_i$, with all differences $u_i-u_j$ zero on its diagonal. A chart of its blowup chooses one nonzero normal difference as scale q, and writes every other difference as q times a normalized difference. At least two normalized child positions differ; choose two as 0 and 1. Subcollections with equal normalized position are exactly the smaller collision clusters still to be blown up. Repeating the substitution gives coordinates indexed by a rooted cluster tree: one scale $q_I$ for each nontrivial cluster and distinct normalized positions $a_{(I,j)}$ for its children, with two normalized positions fixed at 0,1 and the parent attachment at infinity. At the root the three paths to the fixed labels normalize the three distinguished attachment points. The remaining a coordinates and all the $q_I$ are independent affine coordinates, with only nonzero differences inverted. This proves smoothness and shows that boundary divisors have local equations $q_I=0$ with independent $q_I$, hence are SNC. These charts cover because every nonzero blowup normal direction has two distinct child positions. Repeated labels in a child are precisely what the next blowup separates. [given, F1, construct, algebra]

1.33 Start with P1 times $T_N$ and its labelled sections. For each cluster boundary, create a bubble at the common child position on its parent component; perform parent clusters before their children. Intrinsically the centre is the coincidence section over that boundary divisor on the already constructed parent component. It is smooth of codimension two in the total space. The ideal in the cluster chart is $(x-a,q_I)$, where x is the parent component coordinate, a the common position and $q_I$ the boundary scale. Blow up that ideal. In one chart $x-a=q_I$ y, the component carrying the cluster has coordinate y; in the other chart $q_I=(x-a)v$, the local node is [given, F1, construct, algebra]

1.34 $(x-a)v=q_I$. [given, F1, construct, algebra]

1.35 The child markings have the coordinates $a_{(I,j)}$ in the new y chart. By construction those coordinates are distinct except at smaller-cluster boundaries, to be handled at the later steps. The centres for disjoint clusters are disjoint, and the coordinates for nested clusters are the successive substitutions already displayed, so these operations glue independently of affine coordinate choices. They are projective blowups of intrinsically specified centres. The equations also show flatness: each local node has the form $xy=q_I$ over a base where $q_I$ is a coordinate, and all other chart coordinates are smooth parameters. Fibres are reduced nodal trees of rational curves. [given, F1, construct, algebra]

1.36 Every nonroot bubble carries at least two distinct child attachments/markings and the attachment to its parent, hence at least three special points. The root has three distinct paths leading to the fixed labels, and therefore also has at least three special points. All marked sections are disjoint and pass through the smooth locus. Thus the result is a projective family of stable labelled rational trees, with the original marked smooth P1 on the configuration open. The total space is smooth in these charts: for $xy=q_I$ the derivative with respect to $q_I$ is -1. This construction includes the boundary for pair collisions although no blowup of the base was needed for them. [given, F1, construct, algebra]

1.37 The local family is sufficient for our purpose; full representability of a stable-curve moduli functor is not required. Nevertheless its stability gives useful uniqueness: an automorphism is the identity on every component because it fixes at least three special points. Local isomorphisms are consequently unique and satisfy the gluing cocycle automatically. At a node, the smoothing coordinate is the scale $q_I$; at a component, the free a coordinates record all remaining marked attachment positions. This also explains the standard dimension count $\sum_v(\operatorname{valence}(v)-3)+\operatorname{number}(\mathrm{nodes})=N-3$. [given, F1, construct, algebra]

1.38 Let V be smooth integral and projective, and let a rational fibration over K(V) have a smooth geometrically integral genus-zero generic fibre and finitely many distinct geometric horizontal markings. After a finite separable extension K'/K(V), the fibre becomes P1 and the markings are rational. One may take a finite Galois extension containing this field. Normalize V in it to obtain a finite projective cover $V_{\mathrm{tilde}}\to V$. A rational point trivializes the genus-zero curve as P1: curve Riemann–Roch on a degree-one divisor gives a degree-one map to P1. Normalize the first three markings by the unique projective coordinate change. The remaining positions define a rational map $V_{\mathrm{tilde}} \to  T_N$. If there are fewer than three distinct markings, add auxiliary generic markings and give them weight zero in the later moduli calculation; they are used only to construct the model. [given, F1, construct, algebra]

1.39 Take the closure of the graph and resolve it. Pulling back the family just constructed gives a compatible projective stable marked rational-tree model over this modified marking cover. Thus all its curve restrictions arise by base change from one family; they are not unrelated DVR choices. In particular the vertical tree correction and the moduli line constructed on $T_N$ pull back compatibly. [given, F1, construct, algebra]

1.40 For the subadjunction application the base must remain a birational model of V rather than an unrelated alteration. This is achieved by taking all Galois translates of the rational map at once. Form the closure Γ of the graph of the tuple $(\phi _g)_g$ in $V_{\mathrm{tilde}}$ times the finite product of copies of $T_N$. The Galois group acts on Γ, through its action on $V_{\mathrm{tilde}}$ and permutation of the tuple factors. Its projective quotient is constructed from the invariant section ring of a tensor product of the finitely many translated ample bundles; this bundle is invariant, a sufficiently high power has a linearization, and the finite group averaging/integrality construction gives a finite quotient. Since $K(Γ)=K'$ and its invariant field is K(V), the quotient is projective and birational over V. Normalize it, resolve it, and call the resulting smooth birational model V'. Normalize the base change of Γ to V'. This is a finite cover of V': finiteness of a finite-group quotient persists under the base change and normalization, which is finite for varieties over C. It retains the morphisms to each $T_N$. Pullback of the universal family gives the desired compatible marked model on that finite cover of the smooth birational base V'. [given, F1, construct, algebra]

1.41 The finite cover need not be smooth for the nef-class descent: normalize any integral curve in it and apply the marked-tree calculation to that curve. A rational divisor class pulled back from $T_N$ is nef there if its degree on all these normalized curves is nonnegative. Finite-cover projection formula then gives the same inequality on every curve in V'. Coefficient and relative-canonical calculations can be made on a resolution of the total family; they do not require calling the possibly singular finite cover itself smooth. [given, F1, construct, algebra]

1.42 On the family over $T_N$ with rational marking weights summing to two, choose a common denominator. The divisor F obtained by the weighted-tree rule is a rational combination of the components above the boundary divisors. Its coefficient differences across each edge are α(I)-1, normalized to make one component have coefficient zero and all others nonnegative. In the displayed cluster charts these are fixed rational linear combinations of the boundary equations $q_I$; the same coefficients are the elementary blowup discrepancies, so the local corrected line bundles agree on overlaps. A divisible power Q of $K_{\mathrm{relative}}+D-F$ is fibrewise of degree zero on every rational component. A line of multidegree zero on a connected rational tree is trivial: trivialize on components and remove the scalar gluing constants recursively along the tree. Its H0 is one-dimensional and H1 zero, as follows also by the normalization exact sequence at the nodes. [given, F1, construct, algebra]

1.43 The existing exact supplier `thm-cohomology-and-base-change` applies here: the family is proper and flat of finite presentation and Q is an invertible sheaf, hence base-flat. At $q=1$ the fibre comparison is onto its zero target; clauses (a),(c) give $R1=0$ locally. Clause (b) at $q=1$ then gives surjectivity at $q=0$, and clauses (a),(b),(c) at $q=0$ make $f_*Q$ locally free of rank one with arbitrary base change. Evaluation $f*f_*Q\to Q$ is an isomorphism on every fibre and hence an isomorphism by local Nakayama (both sides are line bundles). This supplies the base line bundle and its pullback identity, with actual AC/DC assumptions of that supplier retained. The canonical pairing product in the preceding calculation gives effectivity and nefness of its rational class. [given, F1, construct, algebra]

1.44 The matching calculation can be made prime by prime. Work on the selected smooth birational base V' and recompute L and the discriminant there, including its new exceptional primes; do not assume that the old moduli divisor simply pulls back under an unexamined base blowup. Over the generic point of a base prime this is a smooth surface calculation over a DVR. The maximum defining δ is unchanged by the elementary SNC blowups: blowing up two vertical components gives $b_{\mathrm{new}}=b_1+b_2−1$, $w_{\mathrm{new}}=w_1+w_2$, so its ratio is the weighted mean of their two old ratios; blowing up a vertical and horizontal component of horizontal coefficient $h\le 1$ gives the old vertical ratio plus (h−1)/w, which does not increase it; blowing up a smooth point of a vertical component gives a still smaller ratio. The old strict transforms preserve the previous maximum. Thus both maxima may be computed on a common resolution. [given, F1, construct, algebra]

1.45 On that common resolution two relative canonical classes with the same horizontal markings differ only by a vertical divisor. If both corrected log-canonical classes pull back from the base, this difference is the pullback of a base rational divisor. Above a fixed prime Q, normalize by subtracting $δ_Q$ f*Q. The maximum of $(b_j+w_j−1)/w_j$ is then zero on each model. Adding the pullback of a base coefficient a shifts that maximum by a. Hence two normalized classes with the same horizontal generic data have $a=0$. Their normalized base classes agree along every prime of V', and therefore agree as rational line classes on its smooth base. This is the required comparison with the constructed stable model. [given, F1, construct, algebra]

1.46 For completeness finite-cover ramification changes L and Δ by exactly the same correction. If $π:V_{\mathrm{tilde}}\to V'$ has ramification divisor R and prime ramification index e above Q, crepant pullback of the total log-canonical divisor gives $L_{\mathrm{tilde}}=π*L−R$. At a total-space prime of ramification index $e_j$, the vertical coefficient becomes $b_{\mathrm{tilde}}=e_j b_j−(e_j−1)$, and its new fibre multiplicity is $w_{\mathrm{tilde}}=e_j w_j/e$. Direct substitution gives [given, F1, construct, algebra]

1.47 $(b_{\mathrm{tilde}}+w_{\mathrm{tilde}}-1)/w_{\mathrm{tilde}}=e(b_j+w_j-1)/w_j-(e-1)$. [given, F1, construct, algebra]

1.48 Taking the maximum yields $Δ_{\mathrm{tilde}}=π*Δ−R$. Therefore $M_{\mathrm{tilde}}=L_{\mathrm{tilde}}−Δ_{\mathrm{tilde}}=π*M$. The universal weighted-tree construction gives precisely this normalized class on the finite marking cover, by the preceding uniqueness calculation. Its effectivity descends by norm; its nefness descends by lifting and normalizing each integral base curve and using the finite-cover degree formula. This proves compatibility with the moduli class on the chosen smooth birational base. At codimension-two points, equality of rational line classes follows from equality at all primes on a normal base; no extra divisor supported only in codimension two exists. [given, F1, construct, algebra]

1.49 The residue identity and rounding compatibility give the sign. For a prime Q of V not exceptional over W, suppose every branch above it had $b_j<1-w_j$. Then $\operatorname{ceil}(-b_j)\ge w_j$, so $1/t_Q$ is a section of $O_E(P)$ over the inverse image of a neighbourhood of the generic point. Under $(\mu |E)_*O_E(P)=O_W$ this would be a function on the normal W with a pole along its prime nu(Q), a contradiction. Therefore some branch has $b_j\ge 1-w_j$, hence $\delta _Q\ge 0$. Negative coefficients can occur only over nu-exceptional primes. This proves $\nu _*\Delta \ge 0$. [given, F1, construct, algebra]

2.1 Combining $M=L-\Delta $ with the definition of L gives exactly $K_V+\Delta +M\sim_{\mathbb Q}  \nu *((K_X+G)|W)$, the desired resolution interface. [given, F1, construct, algebra] ∎



Research candidate only. Its exact projective transverse hypotheses are retained. No imported subadjunction theorem, production admission, independent acceptance or native gate coverage is asserted.

## Remarks

Research candidate only. Its exact projective transverse hypotheses are retained. No imported subadjunction theorem, production admission, independent acceptance or native gate coverage is asserted.
