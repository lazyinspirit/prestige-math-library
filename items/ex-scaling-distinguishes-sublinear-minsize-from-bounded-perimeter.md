---
id: "ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter"
kind: "example"
title: "Scaling distinguishes sublinear minsize from a fixed perimeter cutoff"
status: "draft"
origin: "pipeline"
deps: ["def-real-tree-tripods-and-geodesic-triangle-minsize", "lem-bounded-real-ultralimits-and-free-tail-extension", "lem-metrics-on-rn", "thm-of-square-roots"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §11.20, Lemma 11.168(a), PDF pp. 443–445; explicit scaling calculation and independent Euclidean witness"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Example

Let $X$ be a nonempty geodesic metric space with $m_X(P)=o(P)$. If $\lambda_n>0$ tends to zero and $P_n\geq0$ with $\sup_n\lambda_nP_n<\infty$, then $\lambda_nm_X(P_n)\to0$. A fixed bound on the unscaled perimeters also forces vanishing after rescaling, even without sublinearity, but gives no conclusion for perimeters of order $1/\lambda_n$. The Euclidean right triangles of scale $n+1$ at $\lambda_n=1/(n+1)$ display this distinction for every $n\in\mathbb N$, including $n=0$.

## Facts & Assumptions

**Given:** Fix positive scales tending to zero; for the first assertion assume the displayed sublinearity and bounded rescaled perimeters.

[F1] For perimeter at most $P$, every admissible side triple has diameter at most $P$, so $0\leq m_X(P)\leq P$. ([[def-real-tree-tripods-and-geodesic-triangle-minsize]]).

[F2] An ordinarily convergent bounded real sequence has that value as its ultralimit for every free ultrafilter. ([[lem-bounded-real-ultralimits-and-free-tail-extension]]).

[F3] The Euclidean distance on $\mathbb R^2$ is the square root of the sum of squared coordinate differences. ([[lem-metrics-on-rn]]).

[F4] Nonnegative square roots exist and are unique, including $\sqrt2>0$. ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 Put $H=\sup_n\lambda_nP_n<\infty$. Given $\varepsilon>0$, sublinearity supplies $P_0>0$ with $m_X(P)\leq\varepsilon P$ whenever $P\geq P_0$. For $P<P_0$, F1 gives $m_X(P)\leq P_0$. Separating these cases for each $P_n$ yields the single bound $$0\leq\lambda_nm_X(P_n)\leq\varepsilon\lambda_nP_n+\lambda_nP_0\leq\varepsilon H+\lambda_nP_0.$$ There is no assumption that $P_n$ tends to infinity. [given, F1]

1.2 For each $n\in\mathbb N$ in $\mathbb R^2$, take vertices $(0,0),(n+1,0),(0,n+1)$. The axis-side parameterizations $(u,0)$ and $(0,u)$ for $0\leq u\leq n+1$ have distance $|u-v|$. The third parameterization $(u/\sqrt2,n+1-u/\sqrt2)$ for $0\leq u\leq(n+1)\sqrt2$ has squared distance $2((u-v)/\sqrt2)^2=(u-v)^2$. Thus these really are geodesic triangles and their perimeters are $P_n=(2+\sqrt2)(n+1)$. [F3, F4]

2.1 To make the last expression less than any $\eta>0$, first take $\varepsilon=\eta/(2(H+1))$, obtain its $P_0$, and then take $n$ so large that $\lambda_nP_0<\eta/2$. This proves ordinary convergence to zero, and also ultralimit zero for any free ultrafilter by F2. If instead $P_n\leq M$ for a fixed finite $M$, the simpler bound $0\leq\lambda_nm_X(P_n)\leq\lambda_nM\to0$ works without sublinearity. [step 1.1, F1, F2]

3.1 For any triple $p=(u,0)$, $q=(0,v)$, $r=(t,n+1-t)$ on these sides, the diameter is at least $\max(n+1-t,t)\geq(n+1)/2$: the two terms are lower bounds for $d(p,r)$ and $d(q,r)$ respectively. Conversely the triple $(0,0),(0,0),(n+1,0)$ has diameter $n+1$. At $\lambda_n=1/(n+1)$ the rescaled minsize of these triangles therefore lies in $[1/2,1]$, and their rescaled perimeter is the constant $2+\sqrt2$. They do not vanish, whereas any fixed triangle in the very same plane has both its perimeter and its minsize multiplied by $1/(n+1)$ and tending to zero. This is the claimed witness that controlling only a fixed unscaled perimeter cutoff cannot establish sublinear behavior at the moving scale. [F1, F3, F4, step 1.2] ∎
