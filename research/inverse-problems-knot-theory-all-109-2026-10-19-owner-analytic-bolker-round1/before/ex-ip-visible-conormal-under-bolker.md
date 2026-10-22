---
id: ex-ip-visible-conormal-under-bolker
kind: example
title: "A visible Euclidean Radon conormal satisfies Bolker"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-2d-radon-transform
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-double-fibration-transform
  - def-ip-bolker-condition
  - lem-ip-double-fibration-conormal-kernel
  - lem-ip-bolker-geometric-criteria
  - thm-ip-analytic-wavefront-recovery-under-bolker
  - thm-real-analytic-inverse-and-implicit-function-theorems
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§2.2, Theorem 2.2 proof, printed pp. 13–15; Theorem 1.2, printed p. 5."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, printed pp. 4–7, Radon incidence and conormal direction."
proof_strategy: direct
---

## Example

Let $X=\mathbb R^2$, $G=S^1\times\mathbb R$, and
$$
Z=\{(\theta,s,x):s=x\cdot\theta\}.
$$
Write $x=s\theta+t\theta^\perp$ on $Z$, use the analytic total density $|d\theta\,ds\,dt|$ and constant weight $1$, so $R$ is the full Euclidean Radon transform. This is a properly supported analytic double fibration. Its canonical relation satisfies the global Bolker condition. Using the Euclidean metric to identify covectors with vectors and its associated norm, for every $x\in\mathbb R^2$ and every $\xi\in T_x^*\mathbb R^2\setminus0$, set
$$
\theta=\xi/|\xi|,\qquad \tau=|\xi|,\qquad s=x\cdot\theta,\qquad
\eta_s=\tau,\quad \eta_\theta=-\tau\,x\cdot\theta^\perp.
$$
Then $(\theta,s;\eta_\theta,\eta_s;x,\xi)$ is a canonical pair. Thus every nonzero Euclidean covector is visible. In particular, for a compactly supported distribution $f$, the analytic wavefront recovery theorem implies that if $(x,\xi)\in\operatorname{WF}_A(f)$, then this data covector belongs to $\operatorname{WF}_A(Rf)$.

## Example references

[[def-ip-2d-radon-transform|Radon lines and normal convention]]

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Incidence relation]]

[[def-ip-analytic-double-fibration-transform|Analytic transform]]

[[def-ip-bolker-condition|Bolker condition]]

[[lem-ip-double-fibration-conormal-kernel|Incidence conormal calculation]]

[[lem-ip-bolker-geometric-criteria|Bolker rank test]]

[[thm-ip-analytic-wavefront-recovery-under-bolker|Analytic wavefront recovery]]

## Facts & Assumptions

**Given:** The full Euclidean Radon incidence, its constant analytic weight and line density, and a nonzero covector $(x,\xi)$.

[F1] [[def-ip-2d-radon-transform]]: lines are parameterized by $s=x\cdot\theta$, with $\theta^\perp=(-\theta_2,\theta_1)$.

[F2] [[lem-ip-double-fibration-conormal-kernel]]: the defining function $F(\theta,s,x)=s-x\cdot\theta$ gives conormal components by differentiating $F$, with the relation sign $(\eta,-\xi)$.

[F3] [[def-ip-bolker-condition]]: the Bolker condition requires a singleton left fiber and injective differential at its point.

[F4] [[thm-ip-analytic-wavefront-recovery-under-bolker]]: data-side analytic regularity at a Bolker pair implies object-side analytic regularity; the proof is escalated, so the wavefront consequence below is conditional on completing that supplier.

[F5] [[def-ip-analytic-double-fibration-transform]]: both incidence projections must be analytic submersions and the support condition is properness over compact object supports.

[F6] [[thm-real-analytic-inverse-and-implicit-function-theorems]]: a regular zero of a real-analytic scalar function is locally an analytic hypersurface.

## Proof

**Given:** The incidence and the covector $(x,\xi)$.

1.1 The defining function $F(\theta,s,x)=s-x\cdot\theta$ is analytic and has $\partial_sF=1$. Thus [F6] makes $Z=F^{-1}(0)$ an analytic hypersurface of dimension $3$. [F1, F6, given, algebra]

1.2 A tangent vector satisfies $\dot s-\dot x\cdot\theta-x\cdot\dot\theta=0$. Given any data tangent pair $(\dot\theta,\dot s)$, choose $\dot x=(\dot s-x\cdot\dot\theta)\theta$; this lifts it to $TZ$, so $\pi_G$ is a submersion. Given any object tangent vector $\dot x$, take $\dot\theta=0$ and $\dot s=\dot x\cdot\theta$, so $\pi_X$ is a submersion. Since $\pi_X^{-1}(K)$ is parameterized by the compact set $S^1\times K$ for every compact $K\subset\mathbb R^2$, the restriction to $G$ is proper. The dimensions satisfy $4>3>2\ge2$, so [F5] applies. [F5, step 1.1, algebra, choose]

2.1 In a local angle coordinate $\alpha$ with $\partial_\alpha\theta=\theta^\perp$, the defining function has differential
$$
dF=ds-(x\cdot\theta^\perp)d\alpha-\theta\cdot dx.
$$
By [F2], the canonical relation consists of
$$
\xi=\tau\theta,\qquad \eta_s=\tau,\qquad
\eta_\theta=-\tau x\cdot\theta^\perp,\qquad \tau\ne0.
$$
These signs follow by matching $(\eta,-\xi)=\tau dF$. [F1, F2, algebra]

2.2 For fixed $(\theta,s,\eta_s,\eta_\theta)$ in the image, $\tau=\eta_s\ne0$ and
$$
x=s\theta-\frac{\eta_\theta}{\tau}\theta^\perp,\qquad \xi=\tau\theta.
$$
Thus the left fiber is a singleton. To check the differential, let a tangent variation be in the kernel of the left projection. Then $\dot\theta=0$, $\dot s=0$, $\dot\tau=\dot\eta_s=0$, and
$$
0=\dot s=\dot x\cdot\theta,\qquad
0=\dot\eta_\theta=-\tau\,\dot x\cdot\theta^\perp.
$$
Since $\tau\ne0$ and $(\theta,\theta^\perp)$ is a basis, $\dot x=0$ and $\dot\xi=0$. Hence the left projection is an injective immersion, so [F3] gives global Bolker. [F1, F2, F3, step 1.1, algebra]

3.1 For the specified object covector, $\theta=\xi/|\xi|$ and $\tau=|\xi|$ satisfy $\xi=\tau\theta$. With $s$ and $\eta$ chosen in the statement, step 2.1 supplies the remaining relation equations. Therefore the data-side canonical pair exists for every nonzero $\xi$. [F2, step 2.1, given]

3.2 If the contrapositive of [F4] is available, then $(x,\xi)\in\operatorname{WF}_A(f)$ forces $(\theta,s;\eta_\theta,\eta_s)\in\operatorname{WF}_A(Rf)$. The carrier proves the full geometric example and records this analytic conclusion conditionally because [F4] is not yet ready. [F4, step 3.1, contrapositive] ∎

## Geometric diagram

The line has normal $\theta$, so its conormal covectors are scalar multiples of $\theta$. The point $x$ determines the offset $s=x\cdot\theta$; the tangential component of the data covector records $-x\cdot\theta^\perp$. The drawing fixes these conventions only; the proof computes the full data covector and verifies Bolker directly.

```tikz
\begin{tikzpicture}[scale=1.0]
  \draw[->] (-0.4,0) -- (4.0,0) node[right] {$\theta^\perp$};
  \draw[->] (0,-0.4) -- (0,3.0) node[above] {$\theta$};
  \draw[thick,blue] (-0.3,1.2) -- (3.4,1.2) node[right] {$x\cdot\theta=s$};
  \fill (2.0,1.2) circle (0.06) node[below right] {$x$};
  \draw[->,red,thick] (2.0,1.2) -- (2.0,2.4) node[above] {$\xi=\tau\theta$};
  \draw[->,red,thick] (0,0) -- (0,1.2) node[left] {$\theta$};
  \node at (3.1,2.35) {$\xi$ visible};
\end{tikzpicture}
```
