---
id: "lem-hyperbolicity-is-transported-by-a-quasi-isometry"
kind: "lemma"
title: "Hyperbolicity is transported by a quasi isometry"
deps: ["thm-morse-stability-with-explicit-parameter-dependence", "lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse", "def-axiom-of-choice", "def-coarsely-dense-subset-and-quasi-isometry"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Druţu–Kapovich Corollary 9.39"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC for the Morse supplier. If f:X→Y is a (λ,ε)-quasi-isometric embedding of geodesic spaces and Y is δ-slim, then X is λ(2M(λ,ε,δ)+δ+ε)-slim. Hence quasi-isometric geodesic spaces share hyperbolicity.

## Facts & Assumptions

**Given:** The displayed quasi-isometric embedding, with $\lambda\ge1$, $\varepsilon,\delta\ge0$; write $M=92\lambda^2(\varepsilon+3\delta)$.

[F1] Under AC, [[thm-morse-stability-with-explicit-parameter-dependence]] gives both Hausdorff inclusions with this $M$, for every specified endpoint geodesic, without continuity or properness.

[F2] Under AC, attained coarse density supplies a controlled quasi-isometric inverse by [[lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse]].

[F3] A quasi-isometry admits a coarse Lipschitz quasi-inverse with both composites at bounded distance from the identities ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[A1] AC has the meaning in [[def-axiom-of-choice]] and is used only through F1 and, for the final converse, F2.

## Proof

1.1 Fix any geodesic triangle in $X$ with vertices $a,b,c$, and any point $p$ on its specified side $[a,b]$. Compose the isometric parametrization of each of the three sides with $f$. The given inequalities make each composition a $(\lambda,\varepsilon)$-quasi-geodesic on a nonempty compact interval, even if $f$ is discontinuous. Choose three target endpoint geodesics $G_{ab},G_{bc},G_{ca}$. F1 applies separately to every one of them. [given, F1, A1]

2.1 Fix $h>0$. The first Hausdorff inclusion gives $p'\in G_{ab}$ with $d_Y(f(p),p')<M+h$. Target slimness gives $q'\in G_{bc}\cup G_{ca}$ with $d_Y(p',q')<\delta+h$. The reverse Hausdorff inclusion on whichever side contains $q'$ gives $q\in[b,c]\cup[c,a]$ with $d_Y(q',f(q))<M+h$. Hence $d_Y(f(p),f(q))<2M+\delta+3h$, and the lower embedding inequality gives $$d_X(p,q)<\lambda(2M+\delta+\varepsilon+3h).$$ Only finitely many approximate witnesses are used; there is no assumption that the image of $f$ or of a side has closest points. [step 1.1, given, F1, algebra]

3.1 Taking the infimum over the other two source sides and then letting $h$ decrease to zero proves their distance from $p$ is at most $\lambda(2M+\delta+\varepsilon)$. The chosen source triangle, side and point were arbitrary, proving the exact stated slimness constant. Repeated vertices and zero parameters are included: a side can have a one-point interval, and the argument divides only by the positive $\lambda$. [step 2.1, given, algebra]

4.1 Finally let $f$ be a quasi-isometry in F3's convention, with supplied coarse inverse $h$. If $h$ has coarse Lipschitz constants $A,B$ and $d_X(hf(x),x)\le D$, then $$d_X(x,x')\le2D+A\,d_Y(fx,fx')+B.$$ Replace $A$ by $\max\{1,A\}$, combine this lower bound for $f$ with its coarse Lipschitz upper bound, and enlarge the two constants to obtain some $(\lambda,\varepsilon)$ embedding inequalities. The other composite bound gives attained coarse density. F2 therefore supplies a controlled inverse $g$ which is a quasi-isometric embedding. If $Y$ is hyperbolic, step 3.1 applied to $f$ proves $X$ hyperbolic; if $X$ is hyperbolic, apply the same result to $g$ to prove $Y$ hyperbolic. If the spaces are empty, F3 forces both empty and there are no triangles to check. This proves invariance with the stated AC assumption. [step 3.1, F2, F3, A1, algebra] ∎
