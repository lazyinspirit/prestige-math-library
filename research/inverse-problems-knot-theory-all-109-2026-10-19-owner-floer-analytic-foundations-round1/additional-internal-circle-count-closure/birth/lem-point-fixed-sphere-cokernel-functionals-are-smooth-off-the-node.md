---
id: lem-point-fixed-sphere-cokernel-functionals-are-smooth-off-the-node
kind: lemma
title: "Point-fixed sphere cokernel functionals are smooth and nonzero off the node"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-plancherel, lem-countable-choice-geometric-sphere-cauchy-riemann-fredholm-and-point-index, lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation, lem-countable-choice-hilbert-parametrices-and-index-stability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "McDuff and Salamon, J-holomorphic Curves and Symplectic Topology"
      url: "https://bookstore.ams.org/coll-52"
      locator: "Universal Cauchy--Riemann transversality at marked maps; the actual negative-Sobolev and point-supported obstruction argument is proved below"
---

## Statement

Assume Countable Choice. Let $P:H^3(E)\to H^2(G)$ be a smooth real-linear Cauchy--Riemann type operator on a smooth complex bundle over the standard sphere, with $G=\Lambda^{0,1}T^*S^2\otimes E$, and fix $p\in S^2$. If a continuous real functional $\ell$ on $H^2(G)$ annihilates $P\xi$ for every $\xi\in H^3(E)$ with $\xi(p)=0$, then its distributional representative is smooth on $S^2\setminus\{p\}$ and solves the homogeneous adjoint equation there.

If $\ell\ne0$, this representative is not identically zero on ANY nonempty open subset of $S^2\setminus\{p\}$. Consequently one can test every nonzero point-fixed cokernel functional by smooth forcings supported in any prescribed nonempty source open set away from $p$. This is a statement about the actual $H^3$ point condition; it does not impose a point trace on $H^1$ and does not assume that an $H^2$-dual functional is initially an $L^2$ function.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual smooth operator, bundles, point and continuous real target functional. All distribution pairings and adjoints are real, using fixed smooth positive metrics and densities.

[F1] The geometric sphere supplier proves the actual $H^3\to H^2$ Fredholm realization, bounded point evaluation and explicit finite-dimensional smooth point lifts. ([[lem-countable-choice-geometric-sphere-cauchy-riemann-fredholm-and-point-index]])

[F2] Plancherel identifies integer plane Sobolev norms with their weighted Fourier norms. Countable-Choice Hilbert projection and representation are available by the actual Hilbert parametrix proof. ([[thm-plancherel]], [[lem-countable-choice-hilbert-parametrices-and-index-stability]])

[F3] A smooth solution of a first-order Cauchy--Riemann system with smooth real-linear zeroth-order term has unique continuation from any nonempty open set, by the actual bounded-matrix similarity proof. ([[lem-countable-choice-cauchy-riemann-similarity-and-unique-continuation]])

## Proof

1.1 A continuous functional on $H^2(G)$ restricts to a distribution on smooth tests. In a compact coordinate and bundle patch its bound is $|\ell(\phi)|\le C\|\phi\|_{H^2}$, by multiplying a test by a fixed chart cutoff before extending by zero. Its local representative therefore belongs to $H^{-2}$ in the precise Fourier sense: the dual of the weighted $L^2$ Fourier space for $H^2$ is the space of distributions with squared norm $\int(1+|\xi|^2)^{-2}|\widehat T(\xi)|^2d\xi$. This follows directly by Hilbert representation on that weighted space in [F2], identifying the representing functional on smooth tests by Plancherel. Smooth compact tests are dense by convolution and cutoff. Thus no initially unproved $L^2$ adjoint representative has been assumed. Smooth multiplication is bounded on $H^{-k}$ for an integer $k\ge0$: its action is dual to multiplication on $H^k$, which is bounded on compact supports by the finite Leibniz formula. [F2, given, construct, algebra]

2.1 Let $K:E_p\to H^3(E)$ be a smooth point lift from [F1]. Every smooth section splits as $\xi=(\xi-K\xi(p))+K\xi(p)$. The first term is annihilated after applying $P$, so $\ell(P\xi)=\lambda(\xi(p))$ with the finite real functional $\lambda(v)=\ell(PKv)$. Hence $P^*T=\lambda\delta_p$ as an actual distributional equation, where $T$ denotes the representative of $\ell$. In particular the adjoint equation is homogeneous off $p$. In local complex and conformal frames, multiplying by the smooth density and invertible scalar principal factor converts it to $(D_0^*+C)\eta=0$, where $D_0^*=-\partial_x+i\partial_y$ and $C$ is smooth real linear. This is a local bundle-coordinate calculation from the exact Cauchy--Riemann symbol, and preserves local $H^{-2}$ regularity by step1.1. [F1, step 1.1, construct, algebra]

3.1 We prove its weak interior smoothness at this negative initial order. Let $a(\xi)$ be the real matrix symbol of $D_0^*$; away from zero it is invertible with inverse norm $|\xi|^{-1}$. Choose a smooth frequency cutoff equal to zero for $|\xi|\le1$ and one for $|\xi|\ge2$, and put $E(\xi)=\chi(\xi)a(\xi)^{-1}$. By [F2] this Fourier multiplier maps $H^s$ to $H^{s+1}$ for every integer $s$, because $\sup(1+|\xi|^2)^{1/2}\|E(\xi)\|<\infty$. The complementary bounded-frequency multiplier $1-Ea$ maps $H^{-2}$ to $H^N$ for every fixed $N$. For a compactly supported spatial cutoff $\rho$ on a patch away from $p$, the equation gives $$\rho\eta=E(D)\bigl(-\rho C\eta+[D_0^*,\rho]\eta\bigr)+(1-E(D)D_0^*)(\rho\eta).$$ Both terms in the parentheses are initially in $H^{-2}$, since the commutator is smooth multiplication. Thus $\rho\eta\in H^{-1}$ on a smaller patch. Repeat with nested cutoffs to gain successively $L^2,H^1$ and every higher integer order; at each repetition smooth coefficient multiplication is bounded at the current order by step1.1 and Leibniz. The bounded-frequency term is smooth: weighted Fourier Cauchy--Schwarz makes every differentiated Fourier transform integrable on its bounded support. More generally, once $H^N$ regularity holds for every $N$, Fourier Cauchy--Schwarz with $N>r+1$ gives bounded continuous derivatives through order $r$ in two dimensions. Consequently $T$ is smooth off $p$ and satisfies the adjoint equation there in the ordinary sense. Every step was a specified multiplier and finite localization, valid at the actual negative order. [F2, step 1.1, step 2.1, construct, algebra]

4.1 It remains to exclude a functional supported only at $p$. A point-supported local $H^{-2}$ distribution has order at most two: its pairing is bounded by the local $H^2$ norm, hence by the suprema of derivatives through order two on a fixed compact test support. If all test derivatives through order two vanish at $p$, multiply that test by a cutoff $\rho_\epsilon$ supported in the radius-$\epsilon$ disk and equal to one nearer $p$. Taylor's formula gives $D^k\phi=o(\epsilon^{2-k})$ there for $0\le k\le2$. Leibniz and $D^l\rho_\epsilon=O(\epsilon^{-l})$ imply that every derivative through order two of $\rho_\epsilon\phi$ tends uniformly to zero. The supported distribution pairs equally with $\phi$ and $\rho_\epsilon\phi$, so annihilates that test. It therefore depends only on its finite two-jet: it is a linear combination of $\delta_p$ and its first and second derivatives. Membership in $H^{-2}$ eliminates all derivative terms. Indeed its Fourier transform is a polynomial, and for any polynomial of degree $r\ge1$ the integral of $(1+|\xi|^2)^{-2}|Q(\xi)|^2$ diverges: its nonzero leading homogeneous term is bounded below by $c|\xi|^r$ on an open cone, and the radial integral dominates $\int^\infty R^{2r-3}dR$. Thus such a representative is just $a\delta_p$. [F2, step 1.1, construct, algebra]

5.1 If $T=a\delta_p$, the exact first-order principal part in step2.1 makes $P^*T$ contain a nonzero invertible multiple of $a\partial_x\delta_p$ unless $a=0$; its smooth zeroth-order coefficient and the density derivatives contribute only a multiple of $\delta_p$. The first derivative distributions are independent of $\delta_p$, as testing linear coordinate functions times a cutoff shows. Since step2.1 gives only $\lambda\delta_p$, one must have $a=0$ and $\lambda=0$. Therefore the only representative supported at $p$ is zero. Finally if a representative vanished on any nonempty open set away from $p$, step3.1 and [F3] would make it vanish on all the connected punctured sphere. It would then be supported at $p$ and hence be zero by the argument just given. Smooth tests are dense in $H^2$, so a zero representative is the zero functional. This proves the stated nonvanishing for every nonzero functional, and the possibility of testing it on any prescribed source open set follows by choosing a compact smooth bump with nonzero pairing there. [F3, step 2.1, step 3.1, step 4.1, construct, contradiction] ∎
