---
id: lem-a-flat-rectangle-has-an-explicit-alternating-side-strip-cover
kind: lemma
title: "A flat rectangle has an explicit alternating-side strip cover"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - cor-harmonic-conjugates-differ-by-a-real-constant
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/abs/math/0607691"
      locator: "Rectangular holomorphic-disk model; the explicit alternating-side degree-two cover below avoids a general Riemann-mapping theorem"
---

## Statement

Assume Countable Choice. Let $R=\{z=x+iy:0<x<a,\ 0<y<b\}$, $a,b>0$. There is a proper holomorphic map $p:R\to\{s+it:0<t<1\}$ of degree two, unique up to a real additive constant among such maps whose imaginary part is bounded with limiting values zero on the two open horizontal sides and one on the two open vertical sides. It is explicitly
$$p(z)=\frac4\pi\sum_{\substack{k\ge1\\k\text{ odd}}}\frac{\sinh(k\pi(z-a/2)/b)}{k\cosh(k\pi a/(2b))}.$$
The southwest and northeast corners tend to the negative strip end, and the other two corners to the positive end. In their inward corner coordinates, $p$ has logarithmic leading coefficient $2/\pi$ at the negative ends and $-2/\pi$ at the positive ends, with a holomorphic remainder. The corresponding end coordinates $e^{\pi p/2}$ and $e^{-\pi p/2}$ have nonzero first derivative at those corners. It extends across every open side by reflection, and has exactly one interior simple branch point. No general conformal-mapping theorem or full Axiom of Choice is used.

## Facts & Assumptions

**Given:** The actual positive rectangle dimensions and the displayed series.

[F1] The maximum and minimum principles for bounded plane harmonic functions on compact subdomains, and their strong form, are proved without full Choice. ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]])

[F2] Two harmonic conjugates on a connected domain differ by a real constant. ([[cor-harmonic-conjugates-differ-by-a-real-constant]])

## Proof

1.1 On each closed vertical substrip $\epsilon\le x\le a-\epsilon$ the summands and every fixed complex derivative are bounded by a polynomial in $k$ times $e^{-k\pi\epsilon/b}$. The series therefore converges normally there and defines a holomorphic function. Its imaginary part is zero on the open horizontal sides, where the same normal convergence applies. Put $q_1=e^{\pi(z-a)/b}$, $q_2=e^{-\pi z/b}$. The exact identity $$\frac{\sinh(k\pi(z-a/2)/b)}{\cosh(k\pi a/(2b))}=\frac{q_1^k-q_2^k}{1+e^{-k\pi a/b}}$$ shows that $p$ differs from $$\frac2\pi\log\frac{1+q_1}{1-q_1}-\frac2\pi\log\frac{1+q_2}{1-q_2}$$ by a function holomorphic in a neighborhood of the closed rectangle. Indeed the difference coefficients acquire the exponential factor $e^{-k\pi a/b}$, and its derivatives converge normally in a slightly larger rectangle. The logarithms here are the power-series branches in $|q_j|<1$, since $\sum_{k\text{ odd}}q^k/k=\tfrac12\log((1+q)/(1-q))$ by termwise differentiation and its value at zero. This proves analytic extension up to every side away from the four corners. [given, construct, algebra]

2.1 On either open vertical side the imaginary part of each hyperbolic quotient is $\sin(k\pi y/b)$. Thus its boundary value is one: for $0<\theta<\pi$, the identity in step 1.1 and its radial limit give $$\sum_{k\text{ odd}}\frac{\sin(k\theta)}k=\frac\pi4,$$ because $(1+e^{i\theta})/(1-e^{i\theta})=i\cot(\theta/2)$ has argument $\pi/2$. The exponentially convergent remainder in step 1.1 justifies the boundary passage, or equivalently first take radial factors and then the continuous analytic extension there. At each corner exactly one of $1\pm q_j$ has a simple zero. The same logarithmic formula gives the stated coefficient $\pm2/\pi$, with a holomorphic remainder. Its imaginary part is consequently bounded at each corner and ranges in $[0,1]+o(1)$ on small inward quadrant arcs; its two adjacent side values fix the additive imaginary constant. Apply [F1] to the rectangle with small corner disks removed and let their radii tend to zero. This gives $0\le\operatorname{Im}p\le1$, and the strong principle makes both inequalities strict inside, since the side values differ. Exponentiating the corner logarithm gives a nonzero linear coefficient in the corresponding end coordinate. Reflection across an open side follows directly by continuing the holomorphic logarithmic expression, or by its real/constant-imaginary boundary value. [F1, step 1.1, construct, algebra]

3.1 This map is proper into the open strip. A sequence leaving every compact subset of $R$ approaches an open side, where its imaginary part tends to zero or one, or a corner, where its real part tends to the appropriate infinite end. Thus no inverse image of a compact substrip set escapes. A nonconstant holomorphic map is open: its local Taylor expansion at any point is $p(z)-p(z_0)=c(z-z_0)^r(1+O(z-z_0))$, and a small-root argument, or a circle winding count, puts a small disk about $p(z_0)$ in its image. Properness makes its image closed in the strip: preimages of a converging image sequence remain in the inverse image of a compact disk about its limiting strip point, and have a convergent subsequence. Since the strip is connected, the image is the whole strip. For a fixed $t_0\in(0,1)$ and very negative real part, the only preimages lie near the southwest and northeast corners by compactness away from them. Their exponential end coordinates in step 2.1 each have nonzero derivative, so there is exactly one simple preimage there. The proper degree is therefore two. It is locally constant on regular target values by these local inverses and compactness; crossing a critical value preserves the total multiplicity by the displayed local power model. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Compactify the strip by its two corner coordinates $e^{\pi p/2}$ and $e^{-\pi p/2}$. It is a topological closed disk with two boundary corners. The four corner expansions make $p$ an unramified boundary map there, and reflection gives the same along its open sides. Interior critical points are finite: the derivative extends holomorphically and nonvanishingly in all the boundary charts, while its interior zeros are isolated in a compact remaining set. The degree-two cover has Euler defect exactly one. To verify this finite count, join its finitely many critical values to boundary points by a finite embedded planar tree, subdividing at intersections; equivalently use the explicit upper-half-plane coordinate $e^{\pi p}$ and its fractional linear disk coordinate to draw these finite arcs. Subdivide the resulting disk faces into finitely many triangles. Away from critical values every vertex, edge and face has two lifts. At a critical point of local degree $r$, the lifted vertex count is smaller by $r-1$, with no other defect. Hence $\chi(\overline R)=2\chi(\overline B)-\sum(r-1)$, or $1=2-\sum(r-1)$. Every summand is positive, so there is exactly one critical point and its local degree is two. This uses finite lifted cells, not an unproved global index theorem. [step 2.1, step 3.1, construct, algebra]

5.1 Finally let $p'$ be another map with the stated bounded imaginary part and side values. The bounded harmonic difference $h=\operatorname{Im}(p'-p)$ vanishes on all open sides. For each $\epsilon>0$ use the positive harmonic barrier $$B_\epsilon(z)=\epsilon\sum_c\log(C/|z-c|),$$ summed over the four corners, with $C$ larger than the rectangle diameter. It is positive throughout, diverges at the corners, and has no interior singularity. On the punctured rectangle with sufficiently small corner disks, boundedness of $h$ and its zero side values give $h\le B_\epsilon$ and $-h\le B_\epsilon$ on its boundary. Principle [F1] gives the inequalities inside. Let the corner radii tend to zero and then $\epsilon\downarrow0$ to obtain $h=0$. The holomorphic difference $p'-p$ has zero imaginary part and hence is a real constant by the Cauchy--Riemann equations, equivalently [F2]. This proves uniqueness with exactly the permitted translation freedom. All series, logarithms, finite cuts and limits above are explicit; no full-Choice extremal Riemann-mapping supplier was invoked. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
