---
id: ex-a-pure-full-twist-as-an-ordered-configuration-loop
kind: example
title: "A pure two-strand full twist as an ordered loop"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       def-elementary-geometric-half-twist,
       prop-stacking-of-geometric-braids-is-well-defined,
       def-ordered-configuration-space,
       def-product-topology,
       def-subspace-topology-top,
       def-geometric-braid-with-setwise-endpoints,
       def-braid-isotopy-relative-top-and-bottom,
       def-unordered-configuration-space,
       def-motion-of-an-unordered-point-configuration,
       lem-a-configuration-loop-traces-a-geometric-braid,
       thm-geometric-braids-form-a-group,
       lem-vector-operations-are-continuous-in-a-normed-space,
       lem-complex-conjugation-and-modulus-laws,
       thm-complex-exponential-is-entire-with-derivative-itself,
       cor-complex-differentiability-implies-continuity,
       cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       thm-complex-exponential-addition-and-real-extension,
       thm-sine-cosine-signs-monotonicity-and-ranges,
       thm-quarter-turn-values-and-shift-formulas,
       cor-pi-is-the-first-positive-sine-zero,
       lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §1.2, printed pp. 4–5"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Example

For $n=2$ with $Q=(-h,h)$, the ordered path
$$\eta(t)=\bigl(-h,-h+2h\exp(2\pi i t)\bigr)$$
stays collision-free in the open disk and closes at $Q$. Its traced geometric
braid is the positive full twist $[\sigma_1]^2$ and has identity endpoint
permutation.

## Facts & Assumptions

**Given:** $n=2$, the published base tuple $Q$, spacing $h$, positive elementary half twist $\sigma_1$, and its diamond relative path $\rho$.

[L1] For $n=2$, $h=1/(4(2+1))=1/12$, $Q=(-h,h)$, the midpoint is $0$, and $(\sigma_1)_1=\rho$, $(\sigma_1)_2=-\rho$. The path $\rho$ is continuous, has endpoints $-h,+h$, never vanishes, and satisfies $|\rho(t)|\le h$. The positive convention is the published anticlockwise half twist ([[def-elementary-geometric-half-twist]], [[def-geometric-braid-with-setwise-endpoints]]).

[L2] The complex exponential is continuous, $\exp(i\theta)=\cos\theta+i\sin\theta$ and $|\exp(i\theta)|=1$ for real $\theta$, and $\exp(i\pi)=-1$; also $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-differentiability-implies-continuity]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]]).

[L3] Complex modulus is definite and satisfies $|z+w|\le |z|+|w|$; complex addition and scalar multiplication are continuous ([[lem-complex-conjugation-and-modulus-laws]], [[lem-vector-operations-are-continuous-in-a-normed-space]]).

[L4] On $[0,\pi]$ cosine decreases through $0$ at $\pi/2$ and sine is nonnegative; on $[\pi,2\pi]$ cosine increases through $0$ at $3\pi/2$ and sine is nonpositive by its $\pi$-shift. Thus $\exp(2\pi i t)$ lies in the corresponding closed quadrant for $t\in[0,1/4]$, $[1/4,1/2]$, $[1/2,3/4]$, and $[3/4,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-pi-is-the-first-positive-sine-zero]]).

[L5] $F_2(X)$ is the subspace of $X^2$ consisting of ordered pairs with distinct coordinates; continuity into $X^2$ is coordinatewise, and continuity into $F_2(X)$ follows from the subspace topology ([[def-ordered-configuration-space]], [[def-product-topology]], [[def-subspace-topology-top]]).

[L6] The orbit map $p_2:F_2(X)\to C_2(X)$ is continuous, and an interior based motion is a continuous path with both endpoints $[Q]$ ([[def-unordered-configuration-space]], [[def-motion-of-an-unordered-point-configuration]]).

[L7] Every interior based configuration loop at $[Q]$ has a unique ordered lift from $Q$, whose coordinate graphs are its geometric braid trace ([[lem-a-configuration-loop-traces-a-geometric-braid]]).

[L8] A geometric braid starts at the labelled tuple $Q$, remains collision-free in the open disk, and is pure when every labelled endpoint returns to its starting point ([[def-geometric-braid-with-setwise-endpoints]]).

[L9] In $\gamma\star\beta$, the first half runs $\beta$ and the second half runs $\gamma$ with labels permuted by the lower braid, and the induced class product is $[\gamma][\beta]=[\gamma\star\beta]$ ([[prop-stacking-of-geometric-braids-is-well-defined]]).

[L10] The isotopy classes of geometric braids based at $Q$ form a group with the stacking product ([[thm-geometric-braids-form-a-group]]).

[L11] A braid isotopy is a jointly continuous family of braids with bottom tuple $Q$ and top endpoint set $Q$ at every isotopy parameter ([[def-braid-isotopy-relative-top-and-bottom]]); piecewise continuous maps on two closed sets covering the square paste continuously ([[lem-continuity-is-local-and-pastes]]).

[L12] For a pure geometric braid with coordinate loop $z_\beta$ at $Q$, the pure-braid isomorphism is $$\Psi([\beta])=\bigl(\iota^F_*[z_\beta]\bigr)^{-1}$$ ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]]).

The formulae below specify every path and homotopy. No lift, representative, or point of a nonempty set is chosen, so the Axiom of Choice is not used.

## Proof

**Proof technique:** direct.

1.1 Put $\omega(t):=\exp(2\pi i t)$. By [L2], $\omega$ is continuous and $|\omega(t)|=1$. Since $\exp(i\pi)=-1$ and the exponential addition law gives $\exp(2\pi i)=\exp(i\pi)^2=1$, one has $\omega(0)=\omega(1)=1$. Hence $\eta(t)=(-h,-h+2h\omega(t))$ starts and ends at $Q$. Its coordinate difference is $2h\omega(t)\ne0$, and $$|-h+2h\omega(t)|\le h+2h=3h=\tfrac14<1,$$ while $|-h|=h<1$. Thus its values are ordered configurations in $F_2(\operatorname{int}D^2)$; coordinate continuity and [L5] show that $\eta$ is a continuous ordered loop at $Q$. [L1, L2, L3, L5]

1.2 Let $\alpha(t):=p_2(\eta(t))$. By [L6], this is a continuous interior based loop at $[Q]$. Its unique lift from $Q$ is $\eta$ itself, so [L7] identifies its trace with the coordinate braid $\beta_\eta(t)=(-h,-h+2h\omega(t))$. Because both coordinates of $\eta$ return to their starting values, [L8] shows $\beta_\eta$ is pure and its endpoint permutation is the identity. [L6, L7, L8]

1.3 Use the stacking formula [L9] on two copies of $\sigma_1$. Since the endpoint permutation of the lower copy exchanges labels $1$ and $2$, the stacked coordinate pair is $$\bigl(\rho(2t),-\rho(2t)\bigr)\quad(0\le t\le\tfrac12),\qquad \bigl(-\rho(2t-1),\rho(2t-1)\bigr)\quad(\tfrac12\le t\le1).$$ Its centre is $0$ and its second-minus-first coordinate is $$D_0(t)=\begin{cases}-2\rho(2t),&0\le t\le\tfrac12,\\ 2\rho(2t-1),&\tfrac12\le t\le1.\end{cases}$$ Substitution of the two branches of $\rho$ from [L1] shows that $D_0(t)$ lies successively in the first, second, third, and fourth closed quadrants on the four quarter intervals. It never vanishes, and $|D_0(t)|\le2h$ by [L1]. By [L2] and [L4], $D_1(t):=2h\omega(t)$ lies in the same respective closed quadrant, never vanishes, and has modulus $2h$. [L1, L2, L4, L9]

2.1 For $s,t\in I$ set $$D_s(t):=(1-s)D_0(t)+sD_1(t),\qquad H_1(s,t):=\bigl(-D_s(t)/2,D_s(t)/2\bigr).$$ Each closed quadrant is convex and contains no pair of opposite nonzero vectors, so $D_s(t)\ne0$ for every $(s,t)$. By [L3], $$|D_s(t)|\le(1-s)|D_0(t)|+s|D_1(t)|\le2h,$$ so both coordinates of $H_1$ have modulus at most $h<1$. The formulas and [L2], [L3], [L9] give joint continuity. Both $D_0$ and $D_1$ equal $2h$ at $t=0,1$, so $H_1(s,0)=H_1(s,1)=Q$ for every $s$. Thus [L11] makes $H_1$ a braid isotopy from the stacked diamond braid to the centred round pair $\beta_{\mathrm{round}}(t)=(-h\omega(t),h\omega(t))$. [L1, L2, L3, L9, L11, step 1.3]

2.2 Put $C_s(t):=s(-h+h\omega(t))$ and define $$H_2(s,t):=\bigl(C_s(t)-h\omega(t),C_s(t)+h\omega(t)\bigr).$$ The coordinate difference is $2h\omega(t)\ne0$, and [L3] gives $$|C_s(t)\pm h\omega(t)|\le |C_s(t)|+h\le2h+h=3h<1.$$ Both coordinates are therefore in the open disk and distinct at every height. The formula is jointly continuous by [L2], [L3]. Since $C_s(0)=C_s(1)=0$ and $\omega(0)=\omega(1)=1$, the endpoints are $Q$ for every $s$. Thus [L11] makes $H_2$ a braid isotopy from $\beta_{\mathrm{round}}$ to $\beta_\eta$. [L1, L2, L3, L11, step 1.1]

3.1 The families $H_1$ and $H_2$ agree at their common braid $\beta_{\mathrm{round}}$. Pasting $H_1(2s,t)$ for $s\le1/2$ to $H_2(2s-1,t)$ for $s\ge1/2$ gives a jointly continuous family by [L11]. Each slice is a braid and its endpoints remain $Q$, so this is a braid isotopy from $\sigma_1\star\sigma_1$ to $\beta_\eta$. By [L9] and [L10], $$[\beta_\eta]=[\sigma_1\star\sigma_1]=[\sigma_1]^2.$$ Together with step 1.2, this proves that the trace of the stated ordered loop is the positive full twist and has identity endpoint permutation. [L9, L10, L11, step 1.2, step 2.1, step 2.2]

4.1 Since $\beta_\eta$ is pure by step 1.2, the exact ordered representative of its class under the pure-braid isomorphism [L12] is $$\Psi([\beta_\eta])=\bigl(\iota^F_*[\eta]\bigr)^{-1}\in PB_2.$$ Thus the displayed collision-free ordered loop records this positive full twist under the common basepoint convention, including the inverse in the published identification. [L12, step 1.2, step 3.1] $\square$
