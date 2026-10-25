---
id: "ex-hopf-circle-fibration"
kind: "example"
title: "Hopf circle fibration"
deps: ["thm-numerable-fiber-bundles-are-hurewicz-fibrations", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-lower-dimensional-sphere-maps-are-based-nullhomotopic", "thm-based-sphere-maps-are-classified-by-geometric-degree", "cor-real-line-is-universal-cover-of-circle", "def-axiom-of-choice", "lem-covering-homotopies-lift-by-finite-local-strips", "thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle", "thm-sine-and-cosine-subtraction-formulas", "cor-trigonometric-parity-and-pythagorean-identity", "thm-sine-cosine-zero-sets-and-fundamental-period", "thm-quarter-turn-values-and-shift-formulas", "lem-algebra-of-continuous-real-maps-on-a-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume AC for the numerable-bundle lifting theorem. The Hopf map $h:S^3\subseteq\mathbb C^2\to S^2\subseteq\mathbb R^3$,
$$h(z_1,z_2)=(2\operatorname{Re}(z_1\overline z_2),2\operatorname{Im}(z_1\overline z_2),|z_1|^2-|z_2|^2),$$
is a numerable circle bundle and hence a Hurewicz fibration. Its LES gives $\partial:\pi_2(S^2)\cong\pi_1(S^1)\cong\mathbb Z$ and $h_*:\pi_k(S^3)\cong\pi_k(S^2)$ for $k\ge3$, in particular $\pi_3(S^2)\cong\mathbb Z$. We assert that the connecting map is an isomorphism, without imposing an unchecked orientation sign on chosen generators.

## Facts & Assumptions

[F1] Numerable ordinary bundles are Hurewicz under AC. [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]

[F2] The fibration LES is exact with its specified boundary convention. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] Based maps $S^k\to S^r$ are nullhomotopic for $0\le k<r$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F4] Degree identifies $\pi_r(S^r)$ with $\mathbb Z$ for $r\ge1$. [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

[F5] $\mathbb R\to\mathbb R/\mathbb Z$ is a covering. [[cor-real-line-is-universal-cover-of-circle]]

[F6] Coverings have all-spaces HLP by finite local strips, without AC. [[lem-covering-homotopies-lift-by-finite-local-strips]]

[F7] $[t]\mapsto(\cos2\pi t,\sin2\pi t)$ identifies the quotient circle homeomorphically with the geometric circle. [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]

[F8] The subtraction formulas express the sine and cosine of a difference. [[thm-sine-and-cosine-subtraction-formulas]]

[F9] The sine zero set is $\pi\mathbb Z$, and sine and cosine are $2\pi$-periodic. [[thm-sine-cosine-zero-sets-and-fundamental-period]]

[F10] Continuous real algebra preserves finite maxima and positive-denominator quotients. [[lem-algebra-of-continuous-real-maps-on-a-space]]

[F11] The Pythagorean identity gives $\cos^2 u+\sin^2 u=1$ for every real $u$. [[cor-trigonometric-parity-and-pythagorean-identity]]

[F12] The shift identity is $\cos(u+\pi)=-\cos u$, with $\cos0=1$. [[thm-quarter-turn-values-and-shift-formulas]]

## Verification

**Given:** The displayed Hopf map, basepoint $(1,0)\in S^3$, and north pole $(0,0,1)\in S^2$.

1.1 Put $a=|z_1|^2$, $b=|z_2|^2$. The squared norm of $h$ is $4ab+(a-b)^2=(a+b)^2=1$, so the formula lands in $S^2$ and is continuous. For $(x,y,z)\in U_N=\{z>-1\}$ define $s_N=(\sqrt{(1+z)/2},(x-iy)/\sqrt{2(1+z)})$; its squared norm is $(1+z)/2+(1-z)/2=1$ and substitution gives $h(s_N)=(x,y,z)$. On $U_S=\{z<1\}$ use $s_S=((x+iy)/\sqrt{2(1-z)},\sqrt{(1-z)/2})$. Multiplication of both complex coordinates by $\lambda\in S^1$ preserves $h$. Over $U_N$ any point of a fiber is uniquely $\lambda s_N$, with $\lambda=z_1/|z_1|$; over $U_S$ use $\lambda=z_2/|z_2|$. These continuous coordinates and their inverse $(b,\lambda)\mapsto\lambda s_N(b)$ or $\lambda s_S(b)$ prove ordinary local triviality and surjectivity. Positive square roots are continuous, for $|\sqrt r-\sqrt s|\le\sqrt{|r-s|}$ when $r,s\ge0$. [F10, algebra]

1.2 Put $f_N(z)=\max(0,z+1/2)$, $f_S(z)=\max(0,1/2-z)$ and $\rho_N=f_N/(f_N+f_S)$, $\rho_S=f_S/(f_N+f_S)$. The denominator is positive on $[-1,1]$, the two weights sum to one, and their supports are respectively $\{z\ge-1/2\}\subset U_N$ and $\{z\le1/2\}\subset U_S$. This finite partition has precisely the closed-support condition required by F1, including at the two poles and zero-weight boundaries. [F1, F10]

1.3 We first verify locally the fibre clause used in F7. If $(\cos s,\sin s)=(\cos t,\sin t)$, F8 and F11 give $\sin(s-t)=0$ and $\cos(s-t)=1$. By F9, $s-t=m\pi$ for some $m\in\mathbb Z$. F12 gives $\cos((m+1)\pi)=-\cos(m\pi)$ and $\cos0=1$, so integer induction in both directions gives $\cos(m\pi)=(-1)^m$. Since $\cos(s-t)=1$, $m$ is even and $s-t\in2\pi\mathbb Z$. Conversely F9's $2\pi$-periodicity gives equality whenever the difference lies in $2\pi\mathbb Z$. Thus the parametrization has exactly the claimed fibres, independently verifying the affected injectivity input to F7. By F5–F7 the exponential covering $\mathbb R\to S^1$ is Hurewicz, with discrete fiber $\mathbb Z$. Every based positive-dimensional cube in a discrete space is constant: any two of its points are joined by a straight segment and its continuous image in a discrete set is constant along that segment. Thus all positive homotopy groups of $\mathbb Z$ vanish. The contraction $(r,t)\mapsto(1-t)r$ fixes zero and kills every positive homotopy group of $\mathbb R$. F2 applied to this covering gives $\pi_k(S^1)=0$ for $k\ge2$. F4 supplies $\pi_1(S^1)\cong\mathbb Z$. [F2, F4, F5, F6, F7, F8, F9, F11, F12]

2.1 By steps 1.1–1.2 and F1, $h$ is Hurewicz, and AC is used only through that supplier. F3 gives $\pi_1(S^3)=\pi_2(S^3)=0$. The exact segment $0\to\pi_2(S^2)\xrightarrow{\partial}\pi_1(S^1)\to0$ therefore makes $\partial$ an isomorphism. This conclusion needs no generator sign identification. [F1, F2, F3, step 1.1, step 1.2]

2.2 For $k\ge3$, step 1.3 makes both $\pi_k(S^1)$ and $\pi_{k-1}(S^1)$ zero, so exactness gives that the actual induced map $h_*$ is an isomorphism $\pi_k(S^3)\to\pi_k(S^2)$. For $k=3$, F4 gives $\pi_3(S^3)=\mathbb Z$, hence the claimed value of $\pi_3(S^2)$. [F2, F4, step 1.3]

3.1 None of these spheres or fibers is empty. The endpoint degree $k=3$ uses $\pi_2(S^1)=0$, not merely knowledge of its fundamental group; it was established in step 1.3. At the chart poles only the appropriate chart is used, and the partition in step 1.2 excludes the other pole from its closed support. Thus all bundle and homotopy computations are justified, with AC propagated exactly as stated. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
