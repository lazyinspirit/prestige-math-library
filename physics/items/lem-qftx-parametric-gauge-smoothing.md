---
id: lem-qftx-parametric-gauge-smoothing
kind: lemma
title: "Parametric smoothing of gauge sections"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-parametric-vector-bundle-section-smoothing
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-parametric-vector-bundle-section-smoothing: mathematical-premise
  thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold: mathematical-premise
  prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, full ULB-hosted text"
      url: https://pierre.ag.gerard.web.ulb.be/textbooks/books/Introduction_To_Smooth_Manifolds.pdf
      locator: "Theorem 6.26, relative Whitney approximation; the local finite-parameter vector-bundle smoothing argument is proved directly."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; fiber bundles and homotopy lifting."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; homotopy and Hopf bundle context."
verification:
  precheck: pass
---
## Statement

Let $M$ be a compact connected oriented boundaryless smooth Riemannian manifold of dimension $d\in\{3,4\}$, let $N\ge2$, let $P\to M$ be a smooth principal $SU(N)$ bundle, and fix a frame $p_m$ over $m\in M$. Use the adjoint group bundle $Ad(P)=P\times_{Ad}SU(N)$. Write $\mathcal G_\infty(P)$ for the smooth gauge group with its $C^\infty$ section topology as defined from finite-atlas derivative seminorms, and set $\mathcal G_{\infty,m}(P)=\{u\in\mathcal G_\infty(P):u(p_m)=e\}$. Define $\mathcal G^0(P)$ as the group of continuous sections of $Ad(P)$ with the compact-open topology and $\mathcal G^0_m(P)=\{u\in\mathcal G^0(P):u(p_m)=e\}$. Then the inclusions $\mathcal G_\infty(P)\hookrightarrow\mathcal G^0(P)$ and $\mathcal G_{\infty,m}(P)\hookrightarrow\mathcal G^0_m(P)$ induce bijections on path components and isomorphisms on all homotopy groups at every basepoint. More precisely, finite sphere/disk parameter families and their relative homotopies have the same classes in the smooth and continuous section topologies.

## Statement references

[Lee, Theorem 6.26, relative Whitney approximation](https://pierre.ag.gerard.web.ulb.be/textbooks/books/Introduction_To_Smooth_Manifolds.pdf)

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The compact smooth bundle and section topologies in the Statement. The actual configuration carrier was inspected and has a current hash-bound Step 1 `ready` record; this is authoring readiness only.

[F1] The current configuration carrier defines $\operatorname{Ad}P=P\times_{Ad}SU(N)$, the smooth gauge group $\mathcal G_\infty$ with finite-atlas $C^\infty$ derivative seminorms, the based subgroup $\mathcal G_{k+1,m}=\{u:u(p_m)=e\}$ at Sobolev regularity, and the chosen frame $p_m$; it assumes compact connected oriented boundaryless $M$ of dimension $3$ or $4$, $N\ge2$, and full AC. [[def-qftx-smooth-sobolev-gauge-configuration]] The actual carrier is present and its Definition was inspected; `loadStep1Record` and `step1Decision` now return a current closed `ready` record for this item; this is authoring readiness, not independent proof acceptance.

[F2] For a compact smooth parameter manifold without boundary, finite-parameter families of vector-bundle sections can be uniformly approximated by $C^\infty$-continuous smooth-section families, relative to a closed collared parameter submanifold and finitely many fixed fiber values, through a straight-line homotopy. [[lem-qftx-parametric-vector-bundle-section-smoothing]]

[F3] A compact embedded smooth submanifold has a tubular neighborhood with a smooth nearest-point retraction after shrinking. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking]]

[A1] The continuous section group $\mathcal G^0(P)$ is a local notation introduced in the Statement; it has the compact-open topology. The proof uses the actual smooth gauge group $\mathcal G_\infty$ from [F1], not the separate Sobolev group $\mathcal G_{k+1}$.

## Proof

1.1 Realize $Ad(P)$ as the associated bundle with fiber $SU(N)$ under conjugation and embed that fiber in the real vector space of complex matrices with its Hilbert–Schmidt norm. The associated matrix bundle has linear conjugation transition functions. A continuous family of sections parametrized by a compact smooth pair $(X,K)$ is a continuous family of sections of this matrix bundle; on $K$ it is continuous in the $C^\infty$ topology. Apply [F2], using the fixed basepoint value $I$ as a marked fiber value in the based case, to obtain a uniformly close matrix-valued smooth-section family, unchanged on $K$ and at that point. [F1, F2, given, construct]

2.1 The compact matrix submanifold $SU(N)$ has a positive-radius tubular neighborhood by [F3]. The Hilbert–Schmidt metric is invariant under conjugation by $SU(N)$; uniqueness of the nearest point therefore makes the retraction equivariant under every transition function of $Ad(P)$. Choose the approximation in step 1.1 closer than half the tubular radius and compose it fiberwise with this retraction. The result is a family of smooth $SU(N)$-sections, continuous in the $C^\infty$ topology; it still agrees with the original family on $K$ and at the fixed fiber value because the retraction fixes $SU(N)$. [F1, F2, F3, step 1.1]

3.1 For each parameter and each $t\in[0,1]$, the straight segment from the original matrix section to its close approximation stays in the tubular neighborhood: every point on the segment is within the approximation error of the original $SU(N)$ value. Applying the retraction to this segment gives a continuous homotopy through $SU(N)$-sections, relative to $K$ and the fixed fiber value. [F2, F3, step 2.1, algebra]

4.1 To treat a disk family $H:D^q\to\mathcal G^0(P)$, $q\ge1$, whose boundary family is continuous in the smooth-section topology, set $S^q=\{(x,z)\in\mathbb R^q\times\mathbb R:|x|^2+z^2=1\}$ and let $\rho:S^q\to D^q$ be $\rho(x,z)=x$. The doubled family $H\circ\rho$ is continuous on the boundaryless parameter manifold $S^q$. Its restriction to the equator $K=\{z=0\}\cong S^{q-1}$ is exactly the original boundary family, continuous in the smooth-section topology. A two-sided collar is $c(a,t)=(\sqrt{1-t^2}\,a,t)$ for $a\in S^{q-1}$ and $|t|<1/2$. Apply steps 1.1–3.1 on $(S^q,K)$ and restrict the resulting family and homotopy to the upper hemisphere, identified with $D^q$ by $\rho$. This smooths the disk family relative to its boundary and preserves the marked spatial value in the based subgroup. For a path take $q=1$: the double is $S^1$, and its equator is the two endpoints $S^0$, so both endpoints stay fixed. Thus every disk or path application below uses [F2] only on a boundaryless sphere with an explicitly collared submanifold. [F2, step 1.1, step 2.1, step 3.1, construct]

5.1 For surjectivity on $\pi_j$ with $j\ge1$, take a continuous sphere family $f:S^j\to\mathcal G^0(P)$ based at the identity section and apply steps 1.1–3.1 with empty relative boundary, obtaining a homotopy $F_t$ to a family continuous into the smooth-section topology. If $x_0$ is the parameter basepoint, normalize this entire homotopy by $\widehat F_t(x)=F_t(x_0)^{-1}F_t(x)$. Its initial family is $f$, its value at $x_0$ is the identity for every $t$, and its endpoint is continuous in the smooth-section topology because multiplication and inversion there are continuous. In the based spatial subgroup this normalization also preserves the value $I$ at the marked fiber. Thus the smooth representative and its comparison homotopy are genuinely based in the parameter variable. For injectivity, a nullhomotopy in the continuous group is a family $H:D^{j+1}\to\mathcal G^0(P)$ whose restriction to $S^j$ is the given smooth-topology family; apply the doubled-disk construction of step 4.1 to make the extension smooth in the section variable while fixing its boundary. Choose the basepoint $x_0\in S^j$ on the boundary and identify the disk with the unit ball; the contraction $R_t(x)=(1-t)x+t x_0$ fixes $x_0$ and contracts the boundary into the disk's interior. Then $H(R_t(x))$ is a based nullhomotopy because its value at $x_0$ is the fixed boundary value $e$. Thus injectivity holds in based homotopy groups, not only free homotopy classes. For path components, approximate a single section for surjectivity; for injectivity, use the $q=1$ construction of step 4.1 to approximate a continuous path relative to its two smooth endpoints. These constructions give the component bijection without imposing identity normalization on arbitrary components. In the based subgroup, mark the chosen fiber and preserve the value $I$ throughout. Pointwise multiplication and inversion on $\mathcal G_\infty$ are continuous in its $C^\infty$ topology: in each finite-atlas chart the product rule and chain rule bound each derivative seminorm by finitely many seminorms of the inputs. The compact-open section group is also a topological group because $SU(N)$ multiplication and inversion are continuous and $M$ is compact. Thus translations in both groups are homeomorphisms and transfer the identity-based conclusion to every basepoint. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1, construct]

6.1 The sphere/disk relative identifications follow from the same two constructions: absolute sphere families are approximated relative to no boundary, and any disk equality or nullhomotopy is approximated relative to its boundary by step 4.1. These prove the asserted weak homotopy equivalences for both section groups, conditional on [A1]. [A1, step 4.1, step 5.1, given] ∎

