---
id: thm-toponogov-triangle-comparison
kind: theorem
title: Toponogov triangle comparison
status: draft
origin: pipeline
deps:
  - thm-toponogov-hinge-comparison
  - def-comparison-triangle-in-the-two-dimensional-space-form
  - lem-first-variation-hinge-derivative-formula
  - def-countable-choice
  - def-constant-sectional-curvature-and-space-form
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, pp.21–25: the hinge and triangle comparison theorems"
    - title: "U. Lang, Riemannian Geometry lecture notes"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, Lemmas 5.1, 5.2 and 5.9 and Theorem 5.15, printed pp. 65–69"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ whose sectional curvature satisfies $K\ge k$ at every
tangent two-plane, where $k\in\mathbb R$. Let $x,y,z\in M$ be three points
joined by minimizing geodesic segments, write
$$a:=d_g(y,z),\qquad b:=d_g(z,x),\qquad c:=d_g(x,y)$$
and suppose these three side lengths are positive and admit a **comparison
triangle** in the two-dimensional space form $M^2_k$ of constant sectional
curvature $k$, in the sense of
[[def-comparison-triangle-in-the-two-dimensional-space-form]]: the strict
triangle inequalities hold, and when $k>0$ also
$$a,b,c<\frac{\pi}{\sqrt k},\qquad a+b+c<\frac{2\pi}{\sqrt k}.$$
Let $\alpha,\beta,\gamma\in[0,\pi]$ be the angles of the actual triangle at
$x,y,z$ between the two minimizing sides meeting there, and let
$\bar\alpha,\bar\beta,\bar\gamma\in(0,\pi)$ be the corresponding comparison
angles of a comparison triangle with side lengths $(a,b,c)$. Then every
actual vertex angle is at least its comparison angle:
$$\alpha\ge\bar\alpha,\qquad \beta\ge\bar\beta,\qquad \gamma\ge\bar\gamma .$$
Thus a curvature lower bound makes fixed-side triangles **fatter** than the
constant-$k$ model triangle. No compactness of $M$ is assumed; the degenerate
case in which a side length is zero or a strict triangle inequality fails is
excluded by the admissibility of the comparison triangle, and for $k>0$ the
endpoint values $a,b,c=\pi/\sqrt k$ and $a+b+c=2\pi/\sqrt k$ are likewise
excluded. No choice beyond the inherited $\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian $n$-manifold $(M,g)$, $n\ge2$, with $K\ge k$ everywhere; three points $x,y,z\in M$ together with minimizing geodesic segments joining them; the side lengths $a,b,c>0$ and the angles $\alpha,\beta,\gamma$ at the vertices; and the hypothesis that $(a,b,c)$ admits a comparison triangle in $M^2_k$ with angles $\bar\alpha,\bar\beta,\bar\gamma$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the hinge comparison and the comparison-triangle interface cited below; no further family is selected.

[F1] Comparison triangles and their angles ([[def-comparison-triangle-in-the-two-dimensional-space-form]], [[def-constant-sectional-curvature-and-space-form]], [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]): $M^2_k$ is the complete, simply connected surface of constant sectional curvature $k$; a comparison triangle with side lengths $(a,b,c)$ exists, and is unique up to isometries of $M^2_k$, exactly when $a,b,c>0$ satisfy the strict triangle inequalities and, for $k>0$, $a,b,c<\pi/\sqrt k$ and $a+b+c<2\pi/\sqrt k$; when $k\le0$ no upper restriction is imposed. Its angle at the vertex opposite the side $a$, between the sides $b$ and $c$, is the unique $\bar\alpha\in(0,\pi)$ given by the model cosine law $\bar\alpha=\Phi_{b,c}(a)$, where $$\Phi_{A,B}(C):=\arccos F_{A,B}(C),\qquad F_{A,B}(C):=\begin{cases}\dfrac{\cos(\sqrt k\,C)-\cos(\sqrt k\,A)\cos(\sqrt k\,B)}{\sin(\sqrt k\,A)\sin(\sqrt k\,B)},&k>0,\\ \dfrac{A^2+B^2-C^2}{2AB},&k=0,\\ \dfrac{\cosh(\sqrt{-k}\,A)\cosh(\sqrt{-k}\,B)-\cosh(\sqrt{-k}\,C)}{\sinh(\sqrt{-k}\,A)\sinh(\sqrt{-k}\,B)},&k<0,\end{cases}$$ with the other two angles obtained by cycling the sides. The angle at a vertex of a triangle in $(M,g)$ is defined by $\cos\alpha=g_x(u,v)$ for the unit tangent vectors of the two minimizing sides from that vertex, so $\alpha\in[0,\pi]$.

[F2] Hinge comparison and the model opposite side ([[thm-toponogov-hinge-comparison]]): let $N$ be complete, connected and boundaryless of dimension $\ge2$ with sectional curvature $\ge k$, let $\sigma_1,\sigma_2$ be unit-speed minimizing geodesics from a common point with lengths $A,B>0$, let $\theta\in[0,\pi]$ be their included angle and let $C$ be the distance between their endpoints. If $k>0$ assume $A,B,C<\pi/\sqrt k$ and $A+B+C<2\pi/\sqrt k$. Then $$C\le c_k(A,B,\theta),$$ where $c_k(A,B,\theta)$ is the distance in $M^2_k$ between the endpoints of unit-speed geodesics of lengths $A$ and $B$ issuing from one point with included angle $\theta$; this number is independent of the choices made. For fixed $A,B>0$ (with $A,B<\pi/\sqrt k$ when $k>0$) the same item establishes that $c_k(A,B,\cdot)$ is continuous and strictly increasing on $[0,\pi]$, that it is the inverse of the comparison-angle function on the admissible interval: $$c_k\bigl(A,B,\Phi_{A,B}(C)\bigr)=C\qquad\text{for }|A-B|<C<m(A,B),$$ where $m(A,B):=\min\{A+B,\,2\pi/\sqrt k-A-B\}$ for $k>0$ and $m(A,B):=A+B$ for $k\le0$, and that its endpoint values are $$c_k(A,B,0)=|A-B|,\qquad c_k(A,B,\pi)=m(A,B).$$

[F3] First variation of a hinge: for a unit-speed minimizing geodesic to a point off the cut locus and a unit-speed geodesic leaving that endpoint, the one-sided derivative of the distance to the starting point is $g(\dot\gamma(0),\dot\sigma(\rho))=-\cos\Theta$, the cosine of the angle at the endpoint. This is the first-variation input used by the hinge comparison [F2] in the direction of the model hinge; it is recorded here to fix the conventions, and the triangle argument below uses the hinge comparison only through its stated inequality.

## Proof

**Proof technique:** direct: at each vertex apply the hinge comparison to the two minimizing sides, whose endpoint distance is the opposite side; the comparison angle is the model angle of the same three side lengths, so the side inequality passes to the angles because the model opposite side is a strictly increasing function of the included angle. Zero angles are excluded by the endpoint value of the model side and the strict triangle inequalities.

1.1 Setup and comparison data. [F1, given]
Let $\gamma_{xy},\gamma_{xz},\gamma_{yz}$ be the minimizing geodesic segments of the triangle, so that $c=d_g(x,y)$, $b=d_g(z,x)$ and $a=d_g(y,z)$ are the lengths of the three sides, all positive. The angles $\alpha,\beta,\gamma\in[0,\pi]$ are defined at $x,y,z$ by the metric, and for $k>0$ the side lengths satisfy $a,b,c<\pi/\sqrt k$ and $a+b+c<2\pi/\sqrt k$ by the admissibility hypothesis. By [F1] a comparison triangle with side lengths $(a,b,c)$ exists in $M^2_k$, is unique up to isometry, and has angles $\bar\alpha,\bar\beta,\bar\gamma\in(0,\pi)$ given by the model cosine law: $$\bar\alpha=\Phi_{b,c}(a),\qquad \bar\beta=\Phi_{c,a}(b),\qquad \bar\gamma=\Phi_{a,b}(c).$$ The strict triangle inequalities give $|b-c|<a<b+c$ and its cyclic permutations, and for $k>0$ the perimeter bound gives $a<2\pi/\sqrt k-b-c$; with the notation $m$ of [F2] this says that the opposite side lies in the admissible interval of its two legs, for instance $$a\in\bigl(|b-c|,\,m(b,c)\bigr).$$ [F1, given]

2.1 The angle at $x$. [F1, F2, step 1.1, given]
The sides from $x$ to $y$ and from $x$ to $z$ are unit-speed minimizing geodesics of lengths $c$ and $b$ with included angle $\alpha$, and the distance between their endpoints is $a$. Suppose first that $\alpha=0$. Then the hinge comparison [F2] applies with legs of lengths $b,c$, included angle $0$ and opposite side $a$, giving $$a\le c_k(b,c,0)=|b-c|$$ by the endpoint value of [F2], contradicting the strict triangle inequality $|b-c|<a$ from step 1.1. Hence $\alpha\in(0,\pi]$, and applying [F2] at this angle gives $$a\le c_k(b,c,\alpha).$$ On the other hand step 1.1 gives $\bar\alpha=\Phi_{b,c}(a)$ with $a\in(|b-c|,m(b,c))$, so the inverse identity of [F2] gives $$c_k(b,c,\bar\alpha)=c_k\bigl(b,c,\Phi_{b,c}(a)\bigr)=a .$$ Combining the two displays, $c_k(b,c,\bar\alpha)\le c_k(b,c,\alpha)$; since $\bar\alpha\in(0,\pi)$, $\alpha\in(0,\pi]$ and $c_k(b,c,\cdot)$ is strictly increasing on $[0,\pi]$ by [F2], it follows that $\bar\alpha\le\alpha$. [F1, F2, step 1.1, given]

2.2 The angle at $y$. [F1, F2, step 1.1, given]
The same argument at the vertex $y$ applies [F2] to the minimizing sides from $y$ to $z$ and from $y$ to $x$, of lengths $a$ and $c$, whose included angle is $\beta$ and whose endpoint distance is $b$. If $\beta=0$, the endpoint value gives $b\le|a-c|$, contradicting $|a-c|<b$ from step 1.1; hence $\beta\in(0,\pi]$, the hinge gives $b\le c_k(a,c,\beta)$, and $b=c_k(a,c,\bar\beta)$ by step 1.1 and the inverse identity of [F2]. Strict increase of $c_k(a,c,\cdot)$ on $[0,\pi]$ gives $\bar\beta\le\beta$. [F1, F2, step 1.1, given]

2.3 The angle at $z$. [F1, F2, step 1.1, given]
Likewise, at $z$ the minimizing sides to $x$ and $y$ have lengths $b$ and $a$, included angle $\gamma$ and endpoint distance $c$; if $\gamma=0$ then $c\le|a-b|$, contradicting $|a-b|<c$ from step 1.1, so $\gamma\in(0,\pi]$; the hinge comparison gives $c\le c_k(a,b,\gamma)$, while $c=c_k(a,b,\bar\gamma)$ by step 1.1 and [F2], and strict increase of $c_k(a,b,\cdot)$ on $[0,\pi]$ gives $\bar\gamma\le\gamma$. [F1, F2, step 1.1, given]

3.1 Conclusion and boundary cases. [F1, F2, step 1.1, step 2.1, step 2.2, step 2.3, given]
Steps 2.1, 2.2 and 2.3 prove $\bar\alpha\le\alpha$, $\bar\beta\le\beta$ and $\bar\gamma\le\gamma$: every actual vertex angle is at least its comparison angle, so fixed-side triangles of a manifold with $K\ge k$ are at least as fat as their constant-$k$ model triangles. The boundary cases are accounted for: a zero side length is excluded by the positivity requirement of the comparison-triangle definition, so the three vertices are distinct and the angles are defined; a zero vertex angle is impossible, as shown at each vertex via the endpoint value $c_k(\cdot,\cdot,0)=|A-B|$ and the strict triangle inequalities; an angle equal to $\pi$ is allowed and is covered, because the hinge comparison is stated for $\theta\in[0,\pi]$ and $c_k(\cdot,\cdot,\cdot)$ is strictly increasing on the closed interval $[0,\pi]$, with $\bar\alpha,\bar\beta,\bar\gamma\in(0,\pi)$; and for $k>0$ the endpoint configurations $a,b,c=\pi/\sqrt k$ and $a+b+c=2\pi/\sqrt k$, where the comparison triangle would degenerate, are excluded by the admissibility hypothesis. The argument uses no choice of comparison triangle: its angles are determined by the side lengths through the model cosine law of [F1], and the model side function $c_k(A,B,\theta)$ is independent of the choices in its construction by [F2]; the only choice principle used is the inherited $\mathrm{AC}_\omega$ of [A1], carried by the hinge comparison and the comparison-triangle interface. [F1, F2, step 1.1, step 2.1, step 2.2, step 2.3, given] ∎

## Source locator

Eschenburg §6, pp.21–25, proves Toponogov hinge comparison and derives the triangle angle comparison by comparing the model opposite side with the actual side at each vertex. Lang, *Riemannian and Metric Geometry*, Chapter 5, Lemmas 5.1–5.2 and Theorem 5.15 (printed pp.64–70, PDF pp.67–73), records the model cosine law, monotonicity of the opposite side, and triangle comparison; Lemma 5.9 gives the corresponding side-point version proved separately on this page. The proof above applies the in-run hinge comparison at each vertex, transfers the side inequality to the angle inequality by the strict monotonicity of the model side, and disposes of zero angles with the endpoint value $c_k(A,B,0)=|A-B|$.
