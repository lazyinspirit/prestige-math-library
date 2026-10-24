---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-local-trace-misses-disconnected-branch.json
  precheck: pass
id: ex-local-trace-misses-disconnected-branch
kind: example
title: "A finite local trace misses a disconnected solution branch"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - thm-augmented-residual-contraction-certificate
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

The smooth equation $F(x,\lambda)=x^2-1=0$ has two disconnected solution
components. A valid finite pseudo-arclength trace on one component cannot
certify that the other component has been found.

## Facts & Assumptions

**Given:** $F:\mathbb R^2\to\mathbb R$, $F(x,\lambda)=x^2-1$.

[F1] [[alg-pseudo-arclength-continuation-with-certified-local-corrector]]:
accepted section balls certify only local roots; a `finite-trace` status
makes no global branch-completeness claim.

[F2] [[thm-augmented-residual-contraction-certificate]]: an exact zero with
an invertible Jacobian and a sufficiently small ball satisfies the strict
contraction certificate with zero residual error.

## Verification

**Proof technique:** direct.

1.1 The equation factors as $(x-1)(x+1)=0$, so its complete solution set is $$S=(\{1\}\times\mathbb R)\cup(\{-1\}\times\mathbb R).$$ Each set is connected and open-and-closed relative to $S$, and the two sets are disjoint; therefore they are the two connected components of $S$. [given, algebra]

1.2 Choose $h>0$ and $0<R_0<\min\{h/2,1/4\}$. The seed section is $G_{-1}(x,\lambda)=(x^2-1,\lambda)$ with center $(1,0)$ and radius $R_0$. Its residual is zero, its Jacobian inverse there is $\operatorname{diag}(1/2,1)$ with norm $1$, and its Jacobian is $2$-Lipschitz. Thus the exact-data certificate has $q=2R_0<1$ and zero residual term, and certifies the seed ball by [F2]. In $V=\{(x,\lambda):|x-1|<1,\ -h<\lambda<2h\}$ every zero lies on $c(s)=(1,s)$ for $s\in[-h,2h]$. Rank is one there. [F1, F2, given, choose, algebra]

1.3 At $(1,0)$, $DF=[2\ 0]$ has rank $1$ and unit tangent $t=(0,1)$. Choose previous orientation and candidate tangent $\tau=\widehat t=t=(0,1)$. The chart has $a=\kappa=1$, $r_{\rm ch}^+=2h$, and $h>R_0$, $h+R_0<2h$, so the previous-normal offset and chart tests in [F1] pass. The augmented equation is $(x^2-1,\lambda-h)=0$, whose unique root in any ball of radius less than $1$ centered at $(1,h)$ is $(1,h)$. Its bordered derivative is $\begin{bmatrix}2&0\\0&1\end{bmatrix}$, so the local corrector is nonsingular. [given, algebra]

2.1 At the exact center $(1,h)$ the augmented residual is zero and the Jacobian is invertible. The augmented Jacobian is $2$-Lipschitz; with exact data, choose $0<R<\min\{1/4,h/4\}$, so the whole corrected ball lies in $V$, set $\widehat\beta=1$, and use zero residual and derivative errors. Then $q=2R<1$ and $\beta\rho=0$, so [F2] certifies the unique local section root. With $N_{\rm req}=N_s=1$ and $N_c=0$, the exact predictor already solves this section and both the seed and next ball are certified. The ball of radius $R<1$ also excludes the other root $( -1,h)$. [F2, step 1.3, given, choose, algebra]

3.1 The other component $\{-1\}\times\mathbb R$ contains no point of that local chart around $(1,0)$, and the accepted one-step trace contains no point with $x=-1$. Nevertheless both components satisfy $F=0$. By [F1], the finite trace correctly certifies its local step but cannot certify that the second component is absent or that all branches have been found. [F1, step 1.1, step 1.3, step 2.1, given] ∎

## Remarks

The solution set consists of the two entire vertical lines below; the
arrowheads indicate that both extend beyond the displayed window. The
highlighted segment shows the accepted step from $(1,0)$ to $(1,h)$, with
$h>0$ drawn schematically. The marked points are the exact certified section
roots, not endpoints of the solution component.

```tikz
\begin{tikzpicture}[x=2cm,y=1cm]
\draw[->] (-1.65,0) -- (1.85,0) node[right] {$x$};
\draw[->] (0,-1) -- (0,3.4) node[above] {$\lambda$};
\draw[<->,thick] (-1,-1) -- (-1,3.1);
\draw[<->,thick] (1,-1) -- (1,3.1);
\node[above] at (-1,3.15) {$x=-1$};
\node[above] at (1,3.15) {$x=1$};
\draw[->,very thick,blue] (1,0) -- (1,1.5);
\fill (1,0) circle (2pt);
\fill (1,1.5) circle (2pt);
\node[below right] at (1.08,-0.05) {$(1,0)$};
\node[right] at (1.08,1.5) {$(1,h)$};
\node[right,blue] at (1.08,0.75) {accepted step};
\node[left] at (-1.08,1.5) {unvisited branch};
\end{tikzpicture}
```

The two branches and the accepted step are exactly those identified in
steps 1.1, 1.3 and 2.1. A certificate on the right-hand branch does not
exclude the left-hand branch. The verification above is independent of
this illustration.
