---
id: thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence
kind: theorem
title: Gysin sequence from a sphere-fiber Serre spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, thm-cohomological-serre-spectral-sequence, prop-degree-and-parity-criteria-for-serre-collapse, def-serre-edge-homomorphisms-and-transgression, def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Euler class and integration along the fiber"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 29, printed pp. 101–103"
---

## Statement

Assume the Axiom of Choice. Let $p:E\to B$ be a Serre fibration over a
path-connected CW complex, let $R$ be a commutative unital ring, and let
$n\geq1$. Suppose every fiber is an $R$-cohomology $n$-sphere and a compatible
$R$-orientation has been supplied: the top-cohomology local system is
identified with the constant system $R$, with distinguished generator
$u\in E_2^{0,n}$.

The class
$$e(p):=d_{n+1}(u)\in E_{n+1}^{n+1,0}=H^{n+1}(B;R)$$
is the spherical Euler, or transgression, class. There is a natural Gysin long
exact sequence
$$
\cdots\longrightarrow H^{k-n-1}(B;R)\xrightarrow{\smile e(p)}H^k(B;R)\xrightarrow{p^*}H^k(E;R)\xrightarrow{p_!}H^{k-n}(B;R)\xrightarrow{\smile e(p)}H^{k+1}(B;R)\longrightarrow\cdots. \tag{1}
$$
Here $p_!$ is the canonical quotient from the two-row abutment filtration to
$E_\infty^{k-n,n}$, followed by the supplied orientation; it is integration
along the fiber in this spectral-sequence sense. With the product
and differential conventions of the multiplicative Serre theorem,
$$
d_{n+1}(a u)=(-1)^{|a|}a\smile e(p). \tag{2}
$$
The signs in (1) are normalized by multiplying alternate connecting arrows by
$-1$; this does not change their kernels or images. The construction is
natural for pullback squares preserving the supplied orientation. No
vector-bundle Euler class is used.

## Facts & Assumptions

**Given:** AC, the oriented sphere-cohomology fibration, and the integer $n\geq1$ in the statement.

[A1] [[def-axiom-of-choice]] is assumed exactly to invoke the cohomological Serre construction and its multiplicative refinement.

[F1] [[thm-cohomological-serre-spectral-sequence]] gives the two-row sequence, its natural finite abutment filtration, and its cohomological edge maps.

[F2] [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] gives the total-degree Leibniz rule, the base/fiber product, and naturality as a multiplicative sequence.

[F3] [[def-serre-edge-homomorphisms-and-transgression]] identifies $d_{n+1}$ from $(0,n)$ to $(n+1,0)$ as the cohomological transgression after all earlier outgoing differentials.

[F4] [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]] identifies the bottom cohomological edge. The stable-term filtration in [F1] supplies the canonical quotient onto the other nonzero, top-row subquotient.

[F5] [[prop-degree-and-parity-criteria-for-serre-collapse]] permits collapse once the only possible two-row differential has been taken.

## Proof

**Proof technique:** calculate the sole possible differential and splice its kernels and cokernels through the two-piece filtration.

1.1 The orientation identifies the only nonzero fiber-cohomology local systems as the constant copies of $R$ in rows $0$ and $n$. Hence [F1] gives $E_2^{a,0}=H^a(B;R)$ and $E_2^{a,n}=H^a(B;R)u$, with all other rows zero. For $2\leq s\leq n$, a differential from the top row has target in a row strictly between $0$ and $n$, while a differential from the bottom row has negative second coordinate. Thus these differentials vanish. On page $n+1$ the only possible nonzero differential is $d_{n+1}:E_{n+1}^{a,n}\to E_{n+1}^{a+n+1,0}$. All later differentials have a zero endpoint, so [F5] gives collapse at $E_{n+2}$. [F1, F3, F5]

2.1 Put $e=d_{n+1}(u)$. Since no earlier differential reaches $(n+1,0)$, [F3] identifies its target with $H^{n+1}(B;R)$, so $e$ is an actual base class. A bottom-row class $a$ has zero differential. The Leibniz rule in [F2], applied to the product $a u$, gives $d_{n+1}(a u)=(-1)^{|a|}a e$, proving (2). Thus the only page differential is, up to the displayed unit sign, cup multiplication by $e$. [F2, F3, step 1.1]

3.1 In total degree $k$, the two stable terms are therefore $$E_\infty^{k,0}=\operatorname{coker}\bigl(H^{k-n-1}(B;R)\xrightarrow{\smile e}H^k(B;R)\bigr)$$ and $$E_\infty^{k-n,n}=\ker\bigl(H^{k-n}(B;R)\xrightarrow{\smile e}H^{k+1}(B;R)\bigr).$$ The decreasing abutment filtration has no other nonzero quotient, so [F1] and [F4] give a natural short exact sequence $$0\longrightarrow E_\infty^{k,0}\longrightarrow H^k(E;R)\longrightarrow E_\infty^{k-n,n}\longrightarrow0. \qquad\text{(3)}$$ The left arrow is the bottom edge. Naturality of [F1] applied to the map of fibrations from $p$ to the identity fibration of $B$ identifies its composite from $H^k(B;R)$ with $p^*$. The right arrow followed by the orientation is, by definition, $p_!$. [F1, F4, step 2.1]

4.1 Exactness of (3) says successively that the kernel of $p^*$ is the image of cup multiplication by $e$, the image of $p^*$ is the kernel of $p_!$, and the image of $p_!$ is the kernel of the next cup multiplication. Placing these short exact sequences for consecutive total degrees next to one another gives (1), with no appeal to a homological exact-couple connector. Formula (2) contributes $(-1)^{|a|}$ to every other displayed cup map; multiplying that arrow by the unit $-1$ produces the stated cup-$e$ convention without changing kernels or images. [F2, step 2.1, step 3.1]

5.1 For an orientation-preserving pullback, the coefficient generators correspond. Naturality of [F2] commutes with $d_{n+1}$, so the Euler class pulls back; naturality of the filtration, the bottom edge, and the top-row quotient in [F1] and [F4] commutes with $p^*$ and $p_!$. Hence the whole sequence is natural. [F1, F2, F4, step 2.1, step 3.1, step 4.1]

6.1 If $B$ is empty the path-connected hypothesis excludes the case; if the zero ring is allowed, every displayed group and map is zero and the unique element is the orientation generator. For $n=1$ the first possible differential is $d_2$, exactly as above. Negative cohomological degrees are zero, so (1) has valid endpoints for every integer $k$. The cases $e=0$, $a=0$, $a=1$, a zero or one-term kernel, and a one-cell base are included. Degenerate cochain representatives disappear on passage to cohomology. Both rows, both ends of (3), all three adjacent exactness assertions, and both orientations of every pullback square have been checked. AC is used only through [F1]–[F2]. There is no iff assertion and no splitting of (3) is claimed. [A1, F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Source notes

[Miller, Lecture 29](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), printed pp. 101–103, gives the two-row Gysin sequence, defines the Euler class as the top generator's transgression, and derives multiplication by it from Leibniz. The map called integration along the fiber here is the canonical quotient onto the stable top row, not the cohomological axis edge defined in [F4]. Miller writes an $(n-1)$-sphere fiber; replacing his $n$ by $n+1$ gives the indexing used here.
