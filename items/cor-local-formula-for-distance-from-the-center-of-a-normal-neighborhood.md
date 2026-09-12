---
id: "cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood"
kind: "corollary"
title: "Local formula for distance from the centre of a normal neighbourhood"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-radial-geodesics-minimize-length-in-a-normal-neighborhood","def-riemannian-distance-on-a-connected-manifold","cor-polar-form-of-the-metric-in-normal-coordinates","def-riemannian-speed-and-length","thm-intermediate-value","thm-newton-leibniz-with-interior-derivative","thm-monotonicity-of-the-integral","def-normal-neighborhood-and-normal-coordinate-chart","thm-gram-schmidt-orthonormalisation","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-compactness-under-continuous-maps","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-heine-borel-r","lem-closed-subset-of-a-compact-space-is-compact","thm-extreme-value-r","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 19.1.2 and preceding minimality argument, pp.137 and 140
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a connected Riemannian manifold without boundary, and suppose
$$\exp_p:B_\rho(0_p)\longrightarrow U$$
is a diffeomorphism, where $\rho>0$. Then, for every $v\in B_\rho(0_p)$,
$$d_g\bigl(p,\exp_p(v)\bigr)=|v|_{g_p}.$$

More sharply, every piecewise $C^1$ competitor from $p$ to $\exp_p(v)$ whose image is not contained in $U$ has length strictly greater than $|v|_{g_p}$.

Thus an exponential normal ball of radius $s<\rho$ is exactly the intersection of $U$ with the open $d_g$-ball of radius $s$ centred at $p$; the displayed equality itself makes no assertion about points of that metric ball lying outside $U$.

## Facts & Assumptions

**Given:** The connected boundaryless Riemannian manifold, normal exponential ball, and vector in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[thm-radial-geodesics-minimize-length-in-a-normal-neighborhood]] says that the radial segment to $\exp_p(w)$ has length $|w|_{g_p}$ and minimizes among **piecewise smooth** curves contained in $U$. [[def-riemannian-distance-on-a-connected-manifold]] defines $d_g$ as the infimum of lengths of all **piecewise $C^1$** curves between its endpoints. These two competitor classes are not silently identified.

[F2] A supplied finite basis can be made orthonormal by [[thm-gram-schmidt-orthonormalisation]], and [[def-normal-neighborhood-and-normal-coordinate-chart]] identifies its normal coordinates with the inverse exponential coordinates. [[thm-heine-borel-rn]] makes a closed Euclidean ball compact; [[thm-compactness-agrees-with-metric-compactness]] identifies that with topological compactness; [[thm-compactness-under-continuous-maps]] preserves compactness under the coordinate inverse and the exponential map; and [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes the resulting compact subset closed in the manifold.

[F3] [[thm-heine-borel-r]] makes a closed parameter interval compact. A closed subset of it is compact by [[lem-closed-subset-of-a-compact-space-is-compact]], and [[thm-extreme-value-r]] makes the identity function attain a minimum on every nonempty such subset.

[F4] Under [A1], [[cor-polar-form-of-the-metric-in-normal-coordinates]] gives $g=dr^2+g_r$ on $U\setminus\{p\}$ for $r(q)=|\exp_p^{-1}(q)|_{g_p}$. [[def-riemannian-speed-and-length]] computes the length of a piecewise $C^1$ curve by summing the speed integrals on its finitely many $C^1$ pieces. [[thm-intermediate-value]] supplies crossings of intermediate radial levels; [[thm-heine-borel-r]], [[lem-closed-subset-of-a-compact-space-is-compact]], and [[thm-extreme-value-r]] give the last such crossing. [[thm-monotonicity-of-the-integral]] and [[thm-newton-leibniz-with-interior-derivative]] bound each noncentral piece's length below by its change of radial coordinate.

## Proof

**Proof technique:** direct.

1.1 Put $R=|v|_{g_p}$ and $q=\exp_p(v)$. By [F1], the radial segment $t\mapsto\exp_p(tv)$ has length $R$, so the infimum defining distance satisfies $d_g(p,q)\le R$. [F1, given]

1.2 Fix $s$ with $0<s<\rho$, and put $U_s=\exp_p(B_s(0_p))$ and $K_s=\exp_p(\overline B_s(0_p))$. If $\dim M=n\ge1$, instantiate one basis of $T_pM$ and apply [F2] to make it orthonormal. Its coordinate isometry identifies $\overline B_s(0_p)$ with the closed Euclidean $s$-ball, which is compact; continuity of the coordinate inverse and of $\exp_p$ makes $K_s$ compact. If $n=0$, the closed tangent ball is the singleton $\{0_p\}$ and the same conclusion is immediate. Since a manifold is Hausdorff, [F2] makes $K_s$ closed in $M$. Moreover $U_s$ is open, $U_s\subseteq K_s\subseteq U$, and injectivity of $\exp_p$ gives $K_s\setminus U_s=\exp_p(\{w:|w|_{g_p}=s\})$. [F2, given]

1.3 We first bridge the two competitor classes in [F1]. Let $d:[u,w]\to U$ be **any piecewise $C^1$** curve from $p$ to $\exp_p(z)$ and put $S=|z|_{g_p}>0$ and $h(t)=|\exp_p^{-1}(d(t))|_{g_p}$. For $0<\delta<S$, continuity and [F4] give a time with $h=\delta$; its level set is nonempty, closed in $[u,w]$, and compact, so [F4] gives its greatest time $\tau_\delta$. One has $h(t)>\delta$ on $(\tau_\delta,w]$, since a later value at most $\delta$ would cross the level again before $h(w)=S$. Thus $d$ avoids $p$ throughout $[\tau_\delta,w]$. Subdivide this interval at its finitely many $C^1$ breakpoints. On each resulting piece, smoothness of $r$ away from $p$, the $C^1$ chain rule and the polar identity in [F4] give $|d'|_g^2=(h')^2+|d'_\perp|_g^2$, hence $|d'|_g\ge h'$. Integrating on each nondegenerate piece using [F4], summing, and telescoping the radial increments yields $$L_g(d)\ge L_g(d|_{[\tau_\delta,w]})\ge h(w)-h(\tau_\delta)=S-\delta.$$ This holds for every $\delta\in(0,S)$, so $L_g(d)\ge S$. For $S=0$ the same bound is simply nonnegativity of length. No derivative of $r$ at $p$ has been used. [F4, F3, given]

2.1 Let $c:[a,b]\to M$ be any piecewise $C^1$ curve from $p$ to $q$. If its image is contained in $U$, step 1.3 gives $L_g(c)\ge R$. Suppose instead that it leaves $U$, and choose the explicit radius $s=(R+\rho)/2$, so $R<s<\rho$. The set $E=c^{-1}(M\setminus U_s)$ is nonempty because a point outside $U$ is outside $U_s$; it is closed in $[a,b]$ because $U_s$ is open. By [F3], $E$ has a least element $\tau$. Since $c(a)=p\in U_s$ and $U_s$ is open, $\tau>a$. [F3, step 1.2, step 1.3, given]

3.1 For every $t<\tau$ one has $c(t)\in U_s\subseteq K_s$, while $c(\tau)\notin U_s$. Continuity gives $c(\tau)\in\overline{U_s}$, and the closed set $K_s$ contains $U_s$, so $c(\tau)\in K_s\setminus U_s$. Thus $c(\tau)=\exp_p(w)$ for a unique $w$ with $|w|_{g_p}=s$, and the prefix $c|_{[a,\tau]}$ is piecewise $C^1$ and lies in $K_s\subseteq U$. Applying the **piecewise $C^1$ estimate in step 1.3** to this prefix gives $$L_g(c)\ge L_g(c|_{[a,\tau]})\ge s>R.$$ Hence every competitor from $p$ to $q$ has length at least $R$. [step 1.2, step 1.3, step 2.1]

4.1 Steps 2.1--3.1 cover respectively the competitors contained in $U$ and those leaving it, and step 3.1 gives the promised strict inequality in the latter case. Combining the lower bound for all competitors with step 1.1 gives $d_g(p,q)=R$, including $R=0$, where injectivity gives $q=p$ and the radial curve is constant. [F1, step 1.1, step 1.3, step 2.1, step 3.1]

5.1 For $0<s<\rho$, the equality just proved says $U_s=U\cap B_{d_g}(p,s)$: a point of $U$ has the unique form $\exp_p(w)$ and belongs to either side exactly when $|w|_{g_p}<s$. Empty $M$ supplies no centre; in dimension zero only $v=0$ occurs, and dimension one is already covered by the closed-interval Euclidean ball. The endpoints $|v|=\rho$ and $s=\rho$ are excluded by the open normal ball, while $v=0$ was handled in step 4.1. Assumption [A1] is used through [F1] for the radial upper bound and [F4] for the polar lower bound; the one orthonormal basis at the fixed point and the unique last-crossing and first-exit times require no additional choice. There is no iff claim. [A1, F1, F2, F3, F4, step 1.2, step 1.3, step 4.1] ∎

## Source locator

Datar, preceding minimality argument on p.137 and Proposition 19.1.2 on p.140. The source states that geodesic balls are metric balls; the proof above isolates the pointwise formula and supplies the first-exit compactness details.
