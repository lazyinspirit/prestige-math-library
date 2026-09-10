---
id: "lem-quasi-isometries-extend-to-boundary-homeomorphisms"
kind: "lemma"
title: "Quasi isometries extend to boundary homeomorphisms"
deps: ["lem-boundary-products-are-independent-of-representative-and-basepoint", "thm-morse-stability-with-explicit-parameter-dependence", "lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse", "def-axiom-of-choice", "def-coarsely-dense-subset-and-quasi-isometry", "lem-slim-triangles-imply-the-gromov-product-inequality", "lem-the-gromov-product-inequality-implies-the-four-point-condition"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Druţu–Kapovich Theorem 9.83 (proper ray case); nonproper sequence proof supplied locally"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC for the Morse/coarse-inverse proof. A quasi-isometry between geodesic hyperbolic spaces induces a homeomorphism of their Gromov-sequence boundaries; bounded-distance maps induce the same map and extensions respect composition. Properness is needed for the compact ray-boundary package, not imposed on this sequence statement.

## Facts & Assumptions

**Given:** A quasi-isometry $f:X\to Y$ between geodesic hyperbolic spaces.

[F1] Joint Gromov divergence, representative products $P$ and supremal boundary products $B$, their extended-value comparisons and the basepoint-independent open-set criterion are given by [[lem-boundary-products-are-independent-of-representative-and-basepoint]]. In particular an open set contains some $U_R(\xi)=\{\eta:B(\xi,\eta)>R\}$ at each of its points; the $U_R$ need not themselves be open.

[F2] Under AC, [[thm-morse-stability-with-explicit-parameter-dependence]] controls both Hausdorff inclusions for images of finite geodesic segments, with $M(\lambda,\varepsilon,\delta)=92\lambda^2(\varepsilon+3\delta)$.

[F3] The controlled inverse and its two uniform composite bounds are supplied by [[lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse]].

[F4] Quasi-isometries have the coarse Lipschitz inverse convention of [[def-coarsely-dense-subset-and-quasi-isometry]].

[F5] A $\delta$-slim geodesic space has product constant $\kappa=3\delta$ by [[lem-slim-triangles-imply-the-gromov-product-inequality]], and hence the four-point condition by [[lem-the-gromov-product-inequality-implies-the-four-point-condition]].

[A1] AC is assumed as defined in [[def-axiom-of-choice]], for F2 and F3. No selection of representatives for all boundary classes is used.

## Proof

1.1 First put $f$ in quantitative form. If $h$ is a coarse Lipschitz inverse with constants $A,B$ and $d_X(hf(x),x)\le D$, then $$d_X(x,x')\le2D+A\,d_Y(fx,fx')+B.$$ Enlarging $A$ to at least one and combining with the upper coarse Lipschitz bound for $f$ gives $(\lambda,\varepsilon)$ embedding inequalities for some $\lambda\ge1$, $\varepsilon\ge0$. The bound on $fh$ gives attained coarse density with a finite radius $R$. If either space is empty, F4 forces both empty; there are no Gromov sequences and the boundary assertion is the empty homeomorphism. Henceforth take $o\in X$, use $fo$ as target basepoint, choose target slimness $\delta_Y$, and put $\kappa_Y=3\delta_Y$ and $C_f=\varepsilon+M(\lambda,\varepsilon,\delta_Y)+2\kappa_Y$. [given, F2, F4, F5, A1, algebra]

2.1 For any $x,y\in X$, let $P=(x|y)_o$ and choose a source segment $[x,y]$. For each $z$ on it, the two triangle inequalities through $z$ give $P\le d_X(o,z)$. Put $a=fx$, $b=fy$, $v=fo$ and choose a target segment $G=[a,b]$. Let $m\in G$ have distance $(v|b)_a$ from $a$. This parameter belongs to $[0,d_Y(a,b)]$. Expanding products yields $$d_Y(a,v)+d_Y(b,m)=d_Y(b,v)+d_Y(a,m)=d_Y(a,b)+(a|b)_v.$$ The four-point condition in F5 gives $d_Y(v,m)\le(a|b)_v+2\kappa_Y$. F2, applied to the image of the source segment, gives for each $t>0$ a $z\in[x,y]$ with $d_Y(m,fz)<M+t$. Therefore $$\lambda^{-1}P-\varepsilon\le d_Y(fo,fz)<(fx|fy)_{fo}+2\kappa_Y+M+t.$$ Letting $t$ decrease to zero proves the finite-point threshold estimate $$(fx|fy)_{fo}\ge\lambda^{-1}(x|y)_o-C_f.$$ This uses only finite segments; neither rays, compact balls nor properness enter. [step 1.1, F2, F5, A1, algebra]

3.1 If $(x_n)$ is Gromov, the estimate in step 2.1 sends every joint cutoff for $(x_n|x_m)_o$ at threshold $\lambda(T+C_f)$ to a joint cutoff at threshold $T$ in $Y$. Thus $(fx_n)$ is Gromov. The same calculation with two different sequences proves that equivalent representatives have equivalent images. Define $\partial f([x_n])=[fx_n]$; the equivalence just proved makes this a function without selecting representatives simultaneously. [step 2.1, F1]

4.1 For each fixed representative pair $x\in\xi$, $y\in\eta$, take tail infima and then their supremum in step 2.1. For a finite representative product this gives $P_{fo}(fx,fy)\ge\lambda^{-1}P_o(x,y)-C_f$; if it is infinite, the same conclusion means that every finite threshold holds. The image pair is among the pairs defining $B_{fo}(\partial f\xi,\partial f\eta)$. Taking the supremum over source representative pairs therefore yields $$B_{fo}(\partial f\xi,\partial f\eta)\ge\lambda^{-1}B_o(\xi,\eta)-C_f,$$ with the infinite case understood through finite thresholds. Let $O\subseteq\partial Y$ be open and $\partial f\xi\in O$. F1 gives a $T$ with $U_T(\partial f\xi)\subseteq O$. The displayed estimate gives $U_{\lambda(T+C_f)}(\xi)\subseteq(\partial f)^{-1}(O)$. Applying F1's open-set criterion at every such $\xi$ proves continuity. Basepoint independence in F1 removes the special choice $fo$. This proof does not assert that threshold sets are open. [step 2.1, step 3.1, F1, algebra]

4.2 Suppose $f'$ is at distance at most $E$ from $f$ at every point. At the fixed target basepoint $fo$, changing one argument of a finite product by at most $E$ changes that product by at most $E$, by its formula and the reverse triangle inequality. Changing both arguments costs at most $2E$. Thus images under $f'$ of a Gromov sequence are Gromov, and the mixed products $(fx_n|f'x_m)_{fo}$ differ from $(fx_n|fx_m)_{fo}$ by at most $E$. They jointly diverge, so $[fx_n]=[f'x_n]$. In particular bounded-distance quasi-isometries induce the same boundary map. The identity map induces the identity on classes. [step 3.1, F1, algebra]

4.3 If $k:Y\to Z$ is another quasi-isometry, the embedding inequalities compose: with parameters $(\mu,\eta)$ for $k$, the composite has parameters $(\mu\lambda,\mu\varepsilon+\eta)$. Its attained density follows by choosing an image point within the density radius for $k$, then one within the density radius for $f$, and using the upper bound for $k$. Alternatively its supplied coarse inverse is the composition of the two supplied inverses, since the coarse Lipschitz inequalities preserve bounded errors. Thus the preceding construction applies to $k\circ f$, and on every representing sequence it gives $[(k\circ f)(x_n)]=[k(f(x_n))]$. Consequently $\partial(k\circ f)=\partial k\circ\partial f$. [step 1.1, step 3.1, F4, algebra]

5.1 Apply F3 with the attained radius $R$ from step 1.1. Under A1 it supplies $g:Y\to X$ with $d_Y(fg(y),y)\le R$, $d_X(gf(x),x)\le\lambda(R+\varepsilon)$, and embedding constants $(\lambda,\lambda(2R+\varepsilon))$. The second bound makes its image coarsely dense, and these two bounds make it a quasi-inverse in F4. Thus steps 2.1–4.1 apply with the roles of $X,Y$ reversed and prove that $\partial g$ is continuous. Steps 4.2–4.3 show $\partial g\circ\partial f=\operatorname{id}_{\partial X}$ and $\partial f\circ\partial g=\operatorname{id}_{\partial Y}$. Therefore $\partial f$ is a homeomorphism. Empty or singleton boundaries and zero slimness/additive errors obey the same threshold and inverse arguments. AC has been used precisely through the Morse projection families and the coarse-inverse selection; no properness assumption was added. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, step 4.3, F1, F3, F4, A1] ∎
