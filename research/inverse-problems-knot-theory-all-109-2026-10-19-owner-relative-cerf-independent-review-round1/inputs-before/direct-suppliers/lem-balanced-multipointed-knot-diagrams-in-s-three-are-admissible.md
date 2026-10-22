---
id: lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible
kind: lemma
title: "Balanced multipointed knot diagrams in the three-sphere are admissible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-euclidean-inverse-function-theorem
  - def-admissible-pointed-heegaard-floer-data
  - thm-mayer-vietoris-sequence-in-singular-homology
  - cor-homology-of-spheres
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-excision-for-singular-homology
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Definition2.2 and the complete automatic-admissibility argument immediately following it, printed7; integral component-sum representation for the broader periodic-domain convention proved locally"
---

## Statement

Assume countable choice. Take a balanced multipointed diagram for one oriented knot in $S^3$ with the splitting, compression disks and cyclic marking convention of the balanced pointed-data definition, without assuming its admissibility. Write $A_i$ and $B_i$ for the components of the complements of the two attaching systems, numbered so that $w_i,z_i\in A_i$ and $w_i,z_{i+1}\in B_i$, with cyclic indices, $1\le i\le k$.

Every integral domain $P$ whose boundary is an integral sum of full attaching curves has an integral representation
$$P=\sum_{i=1}^k a_iA_i+\sum_{i=1}^k b_iB_i.$$
If $n_{w_i}(P)=0$ for every $i$, then $b_i=-a_i$ and
$$n_{z_i}(P)=a_i-a_{i-1},\qquad \sum_i n_{z_i}(P)=0.$$
Such a domain is zero if all its $z$ multiplicities vanish. Consequently every nonzero such domain has both a positive and a negative region coefficient: the diagram is admissible in the precise periodic-domain sense of that Definition. In particular every balanced knot diagram appearing in a valid knot-preserving multipointed move sequence in $S^3$ is admissible, without a further winding modification. This assertion does not construct the move sequence or analytic moduli spaces.

## Statement references

[[def-countable-choice]]

[[thm-euclidean-inverse-function-theorem]]

[[def-admissible-pointed-heegaard-floer-data]]

[[thm-mayer-vietoris-sequence-in-singular-homology]]

[[cor-homology-of-spheres]]

[[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[[thm-excision-for-singular-homology]]

[[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]

[[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]

[[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]]

## Facts & Assumptions

**Given:** The actual balanced splitting of $S^3$, its finite attaching systems bounding the specified compression disks, its one-component cyclic marking, and an integral domain as in the Statement.

[F1] [[def-admissible-pointed-heegaard-floer-data]] supplies the splitting, disks and cyclic marking convention, while its admissibility clause is the conclusion sought here.

[F2] [[thm-mayer-vietoris-sequence-in-singular-homology]] is exact for an open two-set cover. [[cor-homology-of-spheres]] computes integral sphere homology by its full finite-simplex proof, in particular $H_2(S^3;\mathbb Z)=0$.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies the pair connector as the boundary of a relative chain. [[thm-excision-for-singular-homology]] and [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] identify a collared cut-surface pair with its ambient relative homology; when replacing a subspace by its annular deformation retract, [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] applies to their pair sequences.

[F4] [[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]] constructs the integral relative orientation class of a compact oriented surface with boundary, uniquely determined by all interior local generator values, and proves its boundary is the oriented boundary class. Its actual proof also establishes the pointwise uniqueness by restriction to an interior compact core, without AC.

[F5] [[thm-euclidean-inverse-function-theorem]] supplies the local smooth inverse for the explicit normal-coordinate maps, which have invertible derivative on the zero section.

## Proof

1.1 Give the Heegaard surface a thin product collar in the splitting. In this smooth finite setting use the standard metric on $S^3$ and its oriented unit normal $N$ to the surface, with in the standard $S^3\subset\mathbb R^4$, the explicit normal map $(p,t)\mapsto(p+tN(p))/\sqrt{1+t^2}$. Its derivative at zero is the tangent-plus-normal isomorphism. The inverse function theorem [F5] gives local product neighborhoods, while compact separation and a finite subcover give a common positive width and injectivity. Enlarge the interiors of both handlebodies through half this collar to an open cover of $S^3$. The two members retract to the respective handlebodies and their intersection retracts to $\Sigma$. By [F2] and homotopy invariance in [F3], the homomorphism $$H_1(\Sigma;\mathbb Z)\longrightarrow H_1(U_\alpha;\mathbb Z)\oplus H_1(U_\beta;\mathbb Z)$$ induced by their inclusions is injective, since its preceding Mayer–Vietoris term is $H_2(S^3;\mathbb Z)=0$. Hence the kernels of the two individual inclusion maps have zero intersection. No intersection-pairing or full-choice surface duality theorem is needed. [F1, F2, F3, F5, given, construct, algebra]

2.1 We record the relative-domain calculation for any finite disjoint union $C$ of attaching circles on an oriented closed surface. A union of disjoint thin annuli about $C$ retracts to $C$; the annuli are supplied by a finite normal-coordinate construction: choose the oriented unit normal to each circle within the surface, move in that direction in $S^3$, and project back to $\Sigma$ using the first coordinate of its collar inverse from step1.1. At zero the two derivatives span the surface tangent plane; [F5] and compact separation give disjoint annuli of uniform positive width. Relative excision and these collar retractions in [F3] identify $$H_2(\Sigma,C;\mathbb Z)\cong\bigoplus_D H_2(\overline D,\partial\overline D;\mathbb Z),$$ where $D$ runs over the components of the surface cut along those annuli. There are finitely many such components: each additional circle increases the component count by at most one, since cutting a connected surface along one circle gives at most two components. Each summand is infinite cyclic on its oriented relative class. To verify this last assertion directly from [F4], restrict any relative class to an interior point, where its value is an integer times the positive local generator. The integer is locally constant: two nearby points lie inside one closed coordinate disk. Restrict first to its relative group, which is $\mathbb Z$ by the disk pair sequence and the circle homology in [F2]. Its positive disk class restricts to the positive generator at either point by [F4]. Thus every class has the same integer coefficient at those two points. Connectedness of the interior makes the integer one constant $a_D$. Subtracting $a_D$ times the relative orientation class gives zero at every interior point, hence is zero: adding the relative orientation class gives that same class back by its uniqueness in [F4]. Conversely its orientation class has local value one, so has infinite order. This also covers a closed component when $C$ is empty. [F2, F3, F4, F5, step 1.1, construct, algebra]

3.1 It follows that if an integral one-cycle $c$ supported on the disjoint circles $C$ vanishes in $H_1(\Sigma;\mathbb Z)$, then it is the oriented boundary of an integral sum of the complementary components. Indeed the exact pair sequence [F3] lifts its class in $H_1(C;\mathbb Z)$ to $H_2(\Sigma,C;\mathbb Z)$. Step2.1 expresses that class as the finite integral sum of cut-component orientation classes. Their connectors are their oriented circle boundaries, by [F4]. Equality in $H_1(C;\mathbb Z)$ is equality of their circle coefficients, because the homology of a disjoint finite union of circles has one integral generator for each oriented circle; the circle calculation is the $S^1$ case of [F2], and finite disjointness splits the singular chain complex. Returning the collars to zero width therefore gives precisely $c=\partial\sum a_DD$ as an identity of full oriented curve coefficients. [F2, F3, F4, step 2.1, construct, algebra]

4.1 Write $\partial P=c_\alpha+c_\beta$, separating the full-curve coefficients of the two systems. The formal region domain gives an actual relative chain on the surface: separate its finitely many cornered region closures, round corners in small vertex disks, take their relative orientation chains from [F4], and cancel paired edge boundaries; the remaining short corner arcs fill in those vertex disks. Thus $[c_\alpha]+[c_\beta]=0$ in its first homology. Also $c_\alpha$ bounds the corresponding integral combination of compression disks in $U_\alpha$, and $c_\beta$ bounds its combination in $U_\beta$. Thus $[c_\alpha]=-[c_\beta]$ belongs to both kernels in step1.1, and both classes are zero. Apply step3.1 separately to obtain integral sums $P_\alpha=\sum a_iA_i$ and $P_\beta=\sum b_iB_i$ with boundaries $c_\alpha,c_\beta$. The domain $P-P_\alpha-P_\beta$ has zero boundary. Across every attaching-curve edge its adjacent coefficients are therefore equal. A path between any two region interiors can be perturbed off the finitely many curve intersections and transverse to the finitely many embedded curve arcs it meets; in their compact smooth neighborhoods this requires only finitely many small path changes. Following it shows equality of all region coefficients, since $\Sigma$ is connected. Hence this difference is an integral multiple of the whole surface. Absorb that multiple into every $a_i$, using $\sum_iA_i=\Sigma$. This proves the asserted representation for every domain allowed by the broader Definition. [F1, F4, step 1.1, step 3.1, construct, algebra]

5.1 At $w_i$ the representation has coefficient $a_i+b_i$. At $z_i$ it has coefficient $a_i+b_{i-1}$, by the cyclic indexing in [F1]. If every $w$ coefficient is zero, then $b_i=-a_i$ and $n_{z_i}=a_i-a_{i-1}$. The sum of these differences is zero. If every difference vanishes, cyclic connectedness gives one constant $a$ with every $a_i=a$ and $b_i=-a$, so $$P=a\sum_iA_i-a\sum_iB_i=a\Sigma-a\Sigma=0.$$ Otherwise a finite integer list of sum zero with at least one nonzero entry must have a positive and a negative entry. These entries occur at actual marked-region interiors, so $P$ has both a positive and a negative region coefficient. This is exactly admissibility. [F1, step 4.1, algebra, cases]

6.1 If $k=1$, the sole difference is zero and the only $w$-zero periodic domain is zero. If $m=h+k-1=0$, the attaching systems are empty, $\Sigma$ is the sphere and the same constant-domain argument applies; the relative calculation in step2.1 includes this case. Multiple marked points in one region, if they occur, introduce no exception: their coefficients are still the same integers evaluated by the displayed formulas. Finally any valid balanced knot-preserving move sequence has the same one-component cyclic marking at each stage and still splits $S^3$. Applying the result individually to its finitely many stages proves the last assertion without constructing or assuming any additional diagram moves. All sums and collar constructions are finite, and the quoted homology suppliers require no stronger choice. [F1, step 2.1, step 5.1, cases] ∎
