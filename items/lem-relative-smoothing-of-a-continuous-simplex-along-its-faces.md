---
id: "lem-relative-smoothing-of-a-continuous-simplex-along-its-faces"
kind: "lemma"
title: "Relative smoothing of a continuous simplex along its faces"
deps: ["def-smooth-singular-simplex", "lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension", "thm-relative-whitney-approximation-for-manifold-valued-maps", "thm-whitney-approximation-for-manifold-valued-maps", "def-axiom-of-choice", "def-countable-choice", "def-the-standard-smooth-step-function", "lem-distance-to-set-is-lipschitz", "cor-multivariable-taylor-formula-with-peano-remainder"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 17; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $N$ be a smooth manifold without boundary. Let $f:D=\Delta^n\to N$ be continuous. On each codimension-one face $D_i$, prescribe a smooth simplex $g_i$ and a continuous homotopy $H_i:D_i\times[0,1]\to N$ from $f|_{D_i}$ to $g_i$. Require the homotopies to agree on every common face at every time. Then there are a smooth simplex $g:D\to N$ and a continuous homotopy $H$ from $f$ to $g$ whose restriction to each $D_i\times[0,1]$ is exactly $H_i$, with unchanged time parameter. If $f$ is already smooth and every $H_i$ is constant, one may take $g=f$ and $H$ constant. The boundaryless hypothesis cannot be removed: for the boundary target $[0,\infty)$ there are compatible smooth faces of a $3$-simplex, an explicit continuous filling, and compatible constant prescribed face homotopies, for which no filling with a $C^2$ scalar extension to an affine neighbourhood exists. In particular there is no smooth filling in the sense of [[def-smooth-singular-simplex]]. This counterexample requires no choice axiom.

## Facts & Assumptions

**Given:** The compatible face maps and homotopies. Write $B=\partial D$ and $E$ for the affine span of $D$.

[F1] Smooth simplices extend on open affine neighbourhoods ([[def-smooth-singular-simplex]]).

[F2] Compatible smooth faces into a boundaryless target extend smoothly to an open neighbourhood of their union ([[lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension]]).

[F3] A continuous map between boundaryless manifolds, smooth near a closed subset, can be smoothly approximated by a homotopy fixed near that subset, under countable choice ([[thm-relative-whitney-approximation-for-manifold-valued-maps]]).

[F4] The auxiliary Whitney construction supplies an embedding $j$, its image $S$, smooth inverse, open ambient neighbourhood $U$ and smooth retraction $R:U\to S$ fixing $S$ ([[thm-whitney-approximation-for-manifold-valued-maps]], Proof 1.1–6.1).

[F5] Smooth finite cutoffs use the standard step ([[def-the-standard-smooth-step-function]]); distance to a nonempty fixed set is continuous ([[lem-distance-to-set-is-lipschitz]]).

[F6] On an open convex Euclidean neighbourhood, a $C^2$ function has its quadratic Taylor polynomial plus a remainder $o(\|h\|^2)$ at the expansion point ([[cor-multivariable-taylor-formula-with-peano-remainder]], with $k=2$).

[A1] Countable choice is [[def-countable-choice]], the countable instance of [[def-axiom-of-choice]]; it is used only for [F2]–[F4].

## Proof

1.1 If $n=0$, $f$ is already a smooth point map and the constant homotopy suffices. If $f$ is smooth and every prescribed face homotopy is constant, the asserted fixed choice immediately satisfies all restrictions. Otherwise assume $n\ge1$. Finite closed pasting glues the face homotopies to $H_B:B\times[0,1]\to N$. Their top values give $g_B$, and [F2] gives a smooth $h:O\to N$ on an open neighbourhood $O\supseteq B$ agreeing with $g_B$. [given, F1, F2, A1]

2.1 Paste $f$ on $D\times\{0\}$ and $H_B$ on $B\times[0,1]$ to obtain a continuous map on their union $C$. Let $b$ be the barycenter and $\lambda_i$ the barycentric coordinates. Define $d(x,t)=\max((2-t)/2,\max_i(1-(n+1)\lambda_i(x)))$, $s=1/d$ and $r(x,t)=(b+s(x-b),2+s(t-2))$. On $D\times[0,1]$, $1/2\le d\le1$, hence $1\le s\le2$. Each new barycentric coordinate is $(1-s(1-(n+1)\lambda_i(x)))/(n+1)\ge0$, and the new time is between zero and $t$. An entry attaining the maximum makes either that time or a barycentric coordinate zero, so $r$ lands in $C$. On the bottom or sides $d=1$, so $r$ fixes $C$. Composing the pasted map with $r$ gives a continuous $K:D\times[0,1]\to N$ with the exact bottom and side values. Set $f_1(x)=K(x,1)$. [step 1.1, algebra]

3.1 Extend $f_1$ continuously to all $E$ using $\pi:E\to D$ with barycentric coordinates $\mu_i(x)=\max(\lambda_i(x),0)/\sum_j\max(\lambda_j(x),0)$. The denominator is at least one, all coordinates are nonnegative and sum to one, and $\pi|_D=1$. Put $\bar f=f_1\pi$. Fix $j,S,U,R$ from [F4]. If $U=\mathbb R^m$ set $\varepsilon=1$; otherwise set $\varepsilon(x)=\min(1,d(j\bar f(x),\mathbb R^m\setminus U)/2)$. It is positive and continuous and $B(j\bar f(x),\varepsilon(x))\subset U$ by the distance lower bound. The open set $V=\{x\in O:\|jh(x)-j\bar f(x)\|<\varepsilon(x)\}$ contains $B$, since the two maps agree there. [F4, F5, A1, step 1.1, step 2.1, algebra]

4.1 Choose finitely many balls covering compact $B$ with closed doubled balls in $V$. For each use the bump $\eta_a=1-s_0((\|x-p_a\|^2-r_a^2)/(3r_a^2))$, where $s_0$ is the step in [F5], and put $\chi=1-\prod_a(1-\eta_a)$. Then $0\le\chi\le1$, $\chi=1$ near $B$, and its compact support lies in $V$. On $V$ define $F_u(x)=j^{-1}R(j\bar f(x)+u\chi(x)(jh(x)-j\bar f(x)))$ for $u\in[0,1]$, and use $\bar f$ outside the support. The segment stays in the ball of step 3.1, so the formula is target-valued. Compact support inside $V$ makes the pieces agree continuously near every outside point. Thus $F_u$ is a continuous homotopy from $\bar f$ to $F_1$, fixed on $B$; where $\chi=1$, $F_1=h$ is smooth. [F4, F5, step 3.1, algebra]

5.1 Apply [F3] on the ordinary affine manifold $E$, with closed subset $B$, to $F_1$. Its hypotheses hold by step 4.1. Obtain a globally smooth $G:E\to N$ and a homotopy from $F_1$ to $G$ fixed near $B$. Concatenate the restriction of $F_u$ to $D$ with this homotopy, producing $L:D\times[0,1]\to N$ from $f_1$ to $G|_D$, constant on each $\{b\}\times[0,1]$ for $b\in B$. In particular $g=G|_D$ is a smooth simplex. [F1, F3, A1, step 4.1]

6.1 Put $a(x)=1/(1+d(x,B))$ on $D$. It is continuous, equals one on $B$, and lies strictly between zero and one in the interior. For interior $x$, define $H(x,t)=K(x,t/a(x))$ when $t\le a(x)$, and $H(x,t)=L(x,(t-a(x))/(1-a(x)))$ when $t\ge a(x)$. The branches agree at $t=a(x)$ because $K(x,1)=f_1(x)=L(x,0)$. On $B$ define $H=H_B$. Local pasting proves continuity at interior points. At $(b,t_0)$ with $b\in B$, $t_0<1$, nearby points use the first branch and $t/a(x)\to t_0$, so continuity follows from $K$. [F5, step 2.1, step 5.1, algebra]

7.1 At $(b,1)$, first-branch values tend to $K(b,1)=g_B(b)$. For second-branch values, no limit of the time argument is needed: for any open neighbourhood $W$ of $g_B(b)$, continuity of $L$ and compactness of $\{b\}\times[0,1]$ give a neighbourhood $V_b$ of $b$ with $L(V_b\times[0,1])\subset W$, by extracting finitely many product neighbourhoods and intersecting their first factors. This uniform control proves continuity also at $(b,1)$. All side restrictions retain the original $H_i(x,t)$; the endpoints are $f$ and $g$. [step 1.1, step 2.1, step 5.1, step 6.1]

8.1 The proof covers every boundary stratum, including intersecting faces, since step 7.1 uses an arbitrary $b\in B$. The zero-dimensional and fixed-smooth cases were settled in step 1.1. An empty target admits no such $f$ on the nonempty simplex. All local choices outside the embedding and approximation suppliers are finite, and no simultaneous smoothing of all singular simplices is selected. In particular no full AC is used. [F1, A1, step 1.1, step 4.1, step 7.1]

9.1 To show the boundaryless qualification in step 8.1 cannot be removed, take $D=\{(x,y,z)\in\mathbb R^3:x,y,z\ge0,\ x+y+z\le1\}$, affinely identified with $\Delta^3$ by the coordinates $(1-x-y-z,x,y,z)$, and take $N=[0,\infty)$. Let $s_0$ be the standard smooth step in [F5] and put $\rho(s)=1-s_0(4s-1)$. Thus $\rho$ is smooth on $\mathbb R$, equals one for $s\le1/4$, and equals zero for $s\ge1/2$. Prescribe on the four faces $$g_z(x,y,0)=(x-y)^2\rho(x+y)^2,\qquad g_y(x,0,z)=(x-z)^2\rho(x+z)^2,$$ $$g_x(0,y,z)=(y-z)^2\rho(y+z)^2,\qquad g_0|_{\{x+y+z=1\}}=0.$$ Each formula is smooth and nonnegative on its entire affine face plane, since it is a product of squares or zero. Thus each $g_i$ is a smooth simplex into $[0,\infty)$ with an extension that stays in the target, as required by [F1]. [F1, F5, step 8.1, algebra]

10.1 These face maps agree on every intersection. On the $x$-axis edge the restrictions of $g_z$ and $g_y$ are both $x^2\rho(x)^2$; on the $y$-axis edge those of $g_z$ and $g_x$ are both $y^2\rho(y)^2$; on the $z$-axis edge those of $g_y$ and $g_x$ are both $z^2\rho(z)^2$. On the intersection of the fourth face with $z=0$, the argument of $\rho$ in $g_z$ is $x+y=1$, so the restriction is zero and agrees with $g_0$. On its intersections with $y=0$ and $x=0$, the corresponding arguments are $x+z=1$ and $y+z=1$, respectively, again giving zero. These are all six pairwise intersections; their further vertex restrictions therefore agree as well. [step 9.1, algebra]

11.1 Put $q(x,y,z)=x^2+y^2+z^2-2xy-2xz-2yz$ and define $$f(x,y,z)=\max\{q(x,y,z),0\}\rho(x+y+z)^2\quad\text{on }D.$$ This is continuous and nonnegative. On $z=0$ one has $q=(x-y)^2$, so $f=g_z$ there; on $y=0$ and $x=0$ one similarly has $q=(x-z)^2$ and $q=(y-z)^2$, giving the other prescribed maps. On $x+y+z=1$, the factor $\rho(1)^2$ is zero, giving $g_0$. Thus $f$ is a continuous filling of this exact face family. Set $H_i(u,t)=g_i(u)$ for every $t\in[0,1]$. These are compatible constant homotopies from the original face restrictions to their prescribed smooth values. In fact their entire affine-plane extensions can be made independent of real $t$, so no time-endpoint regularity qualification removes this witness. [step 9.1, step 10.1, algebra]

12.1 Suppose a filling $g:D\to[0,\infty)$ of these face maps had a $C^2$ scalar extension $h$ to an open affine neighbourhood of $D$. A smooth filling in [F1] would have such an extension. Restrict $h$ to a small open ball about $0$ and apply [F6] there. Write its quadratic Taylor expansion as $$h(x,y,z)=c+a_x x+a_y y+a_z z+\alpha x^2+\beta y^2+\gamma z^2+\delta xy+\varepsilon xz+\zeta yz+o(x^2+y^2+z^2).$$ For all sufficiently small $t\ge0$, the axis restrictions are $h(t,0,0)=h(0,t,0)=h(0,0,t)=t^2$ by step 9.1. At $t=0$ this gives $c=0$. Substituting each axis, dividing by $t$ and letting $t\downarrow0$ gives $a_x=a_y=a_z=0$; then dividing by $t^2$ gives $\alpha=\beta=\gamma=1$. The face restrictions also give $h(t,t,0)=h(t,0,t)=h(0,t,t)=0$ for all sufficiently small $t\ge0$. Substitution and division by $t^2$ yield $\delta=\varepsilon=\zeta=-2$. Therefore the quadratic Taylor polynomial is exactly $q$. [F1, F6, step 9.1, step 11.1, algebra]

13.1 Evaluating that expansion along the interior diagonal gives $h(t,t,t)=-3t^2+o(t^2)$. For all sufficiently small positive $t$, its value is negative, while $(t,t,t)\in D$ whenever $3t\le1$. This contradicts the nonnegativity of $g=h|_D$. Hence these compatible faces and constant prescribed homotopies admit no such $C^2$ filling and in particular no smooth filling. The contradiction even allows the scalar extension to take negative values outside $D$, so it also applies under the stronger extension-into-target convention. All formulas and choices of this explicit witness are finite and require no choice axiom. Together with the positive boundaryless construction this proves the positive boundaryless assertion and the claimed failure for boundary targets. [step 11.1, step 12.1, algebra] ∎
