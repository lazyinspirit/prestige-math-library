---
id: thm-complex-torus-quotient-is-well-defined
kind: theorem
title: "The quotient $\\mathbb C/\\Lambda$ is a compact Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-complex-lattice-and-complex-torus
  - def-quotient-topology
  - def-riemann-surface-and-holomorphic-atlas
  - def-covering-space-action
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - thm-quotient-universal-property
  - thm-compactness-under-continuous-maps
  - thm-rationals-countable
  - thm-product-of-countable
  - thm-path-connected-implies-connected
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-metric-convergence-and-continuity
  - thm-all-norms-on-rn-are-equivalent
  - thm-heine-borel-rn
  - thm-rational-points-and-boxes-in-rn
  - thm-complex-numbers-are-the-real-coordinate-plane
  - cor-independent-set-is-no-larger-than-a-finite-spanning-set
  - cor-convex-subsets-of-rn-are-contractible
  - cor-contractible-spaces-are-path-connected
  - thm-continuous-image-of-a-connected-space
  - def-homeomorphism-and-open-maps
  - thm-metric-hausdorff-separation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The quotient C/Lambda': the quotient is a Riemann surface and C -> C/Lambda is a covering map, printed pp. 41-42."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, construction of the complex structure on C/Lambda, printed pp. 79-80."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(i): a lattice is a discrete subgroup and C/Lambda is a torus."
verification:
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ be a full
complex lattice with oriented basis $(\omega_1,\omega_2)$, and let
$T_\Lambda=\mathbb C/\Lambda$ carry the quotient topology of the class map
$\pi:\mathbb C\to T_\Lambda$, $\pi(z)=[z]$
([[def-complex-lattice-and-complex-torus]]). Then:

1. the charts inverse to the injective restrictions of $\pi$ to small balls
   form a holomorphic atlas on $T_\Lambda$: each is a homeomorphism onto an open
   subset of $\mathbb C$, and any two are compatible;
2. $T_\Lambda$ is Hausdorff, second countable and compact, hence a compact
   Riemann surface;
3. $\pi$ is a holomorphic covering map.

The atlas depends only on $\Lambda$ as a subset of $\mathbb C$: neither the
choice of a representative of a class nor the choice of the oriented basis
$(\omega_1,\omega_2)$ enters its definition.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$
with $\omega_1,\omega_2$ real-linearly independent, the quotient
$T_\Lambda=\mathbb C/\Lambda$ with its quotient topology, and the class map
$\pi:\mathbb C\to T_\Lambda$.

[F1] $\Lambda$ is a subgroup of $\mathbb C$ with $\omega_1,\omega_2$ real-linearly independent; $\pi$ is the quotient map onto $T_\Lambda$, a subset of $T_\Lambda$ is open exactly when its preimage under $\pi$ is open, $\pi$ is a surjective group homomorphism with kernel $\Lambda$, and the structures depend on $\Lambda$ alone, not on the oriented basis ([[def-complex-lattice-and-complex-torus]]).

[F2] Under the identification $\mathbb C=\mathbb R^2$, $d_{\mathbb C}(z,w)=|z-w|$ is exactly the Euclidean metric $d_2$; convergence and continuity on $\mathbb C$ are the metric notions for $d_{\mathbb C}$ ([[def-complex-metric-convergence-and-continuity]]).

[F3] For all $z,w\in\mathbb C$: $|z|\ge0$, $|z|=0$ exactly when $z=0$, $|zw|=|z|\,|w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F4] On $\mathbb R^n$, $n\ge1$, all norms are equivalent: any two norms give the same open sets, the same convergent sequences and the same continuous maps ([[thm-all-norms-on-rn-are-equivalent]]).

[F5] In $\mathbb R^n$ every closed box $\{x:a_k\le x_k\le b_k\}$ is compact, and a subset is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[F6] The image of a compact set under a continuous map is compact; a continuous map on a nonempty compact space into $\mathbb R$ attains a maximum and a minimum; a continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[F7] For $n\ge1$ the rational open boxes form a countable basis for the topology of $\mathbb R^n$ ([[thm-rational-points-and-boxes-in-rn]]).

[F8] The map $\Phi(a+bi)=(a,b)$ is a bijection $\mathbb C\to\mathbb R^2$; in particular every complex number is $a+bi$ with real $a,b$ ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F9] If a vector space has a spanning set with $n$ elements, then every linearly independent subset is finite with at most $n$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[F10] For every $n\ge1$ the space $\mathbb R^n$ with its Euclidean topology is contractible: it is a nonempty convex subset of itself, and the straight-line formula $H(x,t)=(1-t)x+tc$ contracts it to any chosen centre $c$ ([[cor-convex-subsets-of-rn-are-contractible]]).

[F11] Every nonempty contractible space is path-connected ([[cor-contractible-spaces-are-path-connected]]).

[F12] Every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F13] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).

[F14] A covering-space action of a group $G$ on a space $E$ is an action by homeomorphisms such that every point has an open neighbourhood $U$ with $gU\cap U=\varnothing$ for every nonidentity $g$ ([[def-covering-space-action]]).

[F15] For every covering-space action, the orbit map $E\to E/G$ is a covering map ([[thm-orbit-map-of-a-covering-space-action-is-a-covering]]).

[F16] A chart on a space $X$ is a homeomorphism from an open subset of $X$ onto an open subset of $\mathbb C$; two charts are compatible when both transition maps are holomorphic; a holomorphic atlas is a family of pairwise compatible charts covering $X$; a Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas ([[def-riemann-surface-and-holomorphic-atlas]]).

[F17] A homeomorphism is a continuous bijection whose inverse is continuous; an open map sends open sets to open sets ([[def-homeomorphism-and-open-maps]]).

[F18] The single identity chart $\mathrm{id}_{\mathbb C}$ is a holomorphic atlas on $\mathbb C$: it is a homeomorphism of $\mathbb C$ onto the open set $\mathbb C$, so its domain covers $\mathbb C$, and a family with one chart has no distinct pair of charts to test for compatibility. Since $\mathbb C$ is nonempty and connected (it is $\mathbb R^2$, hence contractible and path-connected by [F10] and [F11], hence connected by [F12]), Hausdorff (its topology is induced by the metric $d_{\mathbb C}$ of [F2], and distinct points of a metric space are separated by disjoint balls, [[thm-metric-hausdorff-separation]]) and second countable (the rational boxes of [F7] form a countable basis in the coordinates of [F2] and [F8]), the space $\mathbb C$ is a Riemann surface in the sense of [F16] ([[def-riemann-surface-and-holomorphic-atlas]]).

No choice principle is used: the only selections are of a centre $z$ of a ball and of representatives in a surjectivity argument, and the countability statements are proved without choice.

## Proof

**Proof technique:** direct.

1.1 Put $A:=|\omega_1|^2$, $B:=\operatorname{Re}(\omega_1\overline{\omega_2})$, $C:=|\omega_2|^2$; then $A,C>0$ and expanding with [F3] gives $|t\omega_1+s\omega_2|^2=At^2+2Bts+Cs^2$ for all real $t,s$, while $AC-B^2=\bigl(\operatorname{Im}(\omega_1\overline{\omega_2})\bigr)^2>0$, because $\operatorname{Im}(\omega_1\overline{\omega_2})=0$ would make $\omega_2=\bigl(\operatorname{Re}(\omega_1\overline{\omega_2})/|\omega_1|^2\bigr)\omega_1$ a real multiple of $\omega_1$, contradicting real-linear independence. [F1, F3, algebra]

1.2 The map $\varphi(t,s):=t\omega_1+s\omega_2$ is surjective: the list $\omega_1,\omega_2$ is real-linearly independent by [F1], and it must span $\mathbb C$ over $\mathbb R$, since otherwise a complex number $z\notin\operatorname{span}_{\mathbb R}\{\omega_1,\omega_2\}$ would make $\omega_1,\omega_2,z$ real-linearly independent (a relation with nonzero coefficient of $z$ would exhibit $z$ as a real combination of $\omega_1,\omega_2$, so that coefficient vanishes, and then the other two vanish), an independent set of three elements in a space spanned by the two-element set $\{1,i\}$ by [F8], contradicting [F9]. [F1, F8, F9]

1.3 The map $\varphi:\mathbb R^2\to\mathbb C$ is continuous: by [F3], $|\varphi(t,s)-\varphi(t',s')|\le|\omega_1|\,|t-t'|+|\omega_2|\,|s-s'|\le 2\max(|\omega_1|,|\omega_2|)\max(|t-t'|,|s-s'|)$, so $\varphi$ is Lipschitz for the max norm on $\mathbb R^2$ and is continuous for it; by [F4] the max norm gives the same topology as $d_2$, which is the topology of $\mathbb C$ by [F2]. [F2, F3, F4]

1.4 $T_\Lambda$ is nonempty and connected: $\mathbb C$ is $\mathbb R^2$ by [F2], hence contractible by [F10], hence path-connected and connected by [F11] and [F12]; a continuous image of a connected space is connected by [F13], and $\pi$ is continuous and surjective by [F1]. [F1, F2, F10, F11, F12, F13]

2.1 Completing the square in each variable gives $|t\omega_1+s\omega_2|^2=A\bigl(t+\tfrac{B}{A}s\bigr)^2+\tfrac{AC-B^2}{A}s^2=C\bigl(s+\tfrac{B}{C}t\bigr)^2+\tfrac{AC-B^2}{C}t^2$ for all real $t,s$, so with $\delta:=\sqrt{(AC-B^2)/\max(A,C)}>0$ one has $|t\omega_1+s\omega_2|\ge\delta\max(|t|,|s|)$; hence every nonzero $\lambda\in\Lambda$ satisfies $|\lambda|\ge\delta$, and distinct $\lambda,\lambda'\in\Lambda$ satisfy $|\lambda-\lambda'|\ge\delta$. [step 1.1, F1, algebra]

2.2 $T_\Lambda$ is compact: the box $[0,1]^2$ is compact in $\mathbb R^2$ by [F5], its image $F:=\varphi([0,1]^2)=\{t\omega_1+s\omega_2:0\le t,s\le1\}$ is compact by [F6] and step 1.3, and $\pi(F)=T_\Lambda$: by step 1.2 every $z\in\mathbb C$ is $\varphi(t,s)$ for real $t,s$, and writing $t=m+t'$, $s=n+s'$ with $m,n\in\mathbb Z$ and $t',s'\in[0,1)$ by the division algorithm for real numbers gives $z-(m\omega_1+n\omega_2)=\varphi(t',s')\in F$ with $m\omega_1+n\omega_2\in\Lambda$; hence $T_\Lambda$ is a continuous image of the compact set $F$, so it is compact by [F6]. [F5, F6, step 1.2, step 1.3]

3.1 $\Lambda$ is uniformly discrete and closed in $\mathbb C$: by step 2.1 the ball $B(0,\delta)$ contains no nonzero lattice point, so every point of $\Lambda$ is isolated, and if $\lambda_n\in\Lambda$ converges to $z\in\mathbb C$ then $|\lambda_n-\lambda_m|<\delta$ for all large $n,m$, which forces $\lambda_n=\lambda_m$ for all large $n,m$ by the uniform gap, and then $z=\lambda_N\in\Lambda$; moreover, since $|\lambda|=|m\omega_1+n\omega_2|\ge\delta\max(|m|,|n|)$ for $\lambda=m\omega_1+n\omega_2\in\Lambda$, the lattice points in any bounded set have bounded parameters $m,n$ and are therefore finite, so for $p\notin\Lambda$ the distance $r:=\operatorname{dist}(p,\Lambda)=\inf_{\lambda\in\Lambda}|p-\lambda|$ is positive. [step 2.1, F1, F2, algebra]

3.2 The group $\Lambda$ acts on $\mathbb C$ by translations $\lambda\cdot z:=z+\lambda$, which are homeomorphisms of $\mathbb C$ by [F2], and this is a covering-space action in the sense of [F14]: for $z\in\mathbb C$ put $U:=B(z,\delta/2)$; if $w\in U\cap(\lambda+U)$ with $\lambda\in\Lambda\setminus\{0\}$, then $w=\lambda+u$ with $u\in U$ and $|\lambda|=|w-u|\le|w-z|+|z-u|<\delta$, contradicting step 2.1. [F14, step 2.1, F2]

4.1 By [F15] the orbit map of the action of step 3.2 is a covering map, and its orbit space is $T_\Lambda$ with orbit map $\pi$ by [F1]; hence $\pi$ is a covering map, so $\pi$ is continuous and locally injective; moreover $\pi$ is open, because for open $W\subseteq\mathbb C$ one has $\pi^{-1}(\pi(W))=\bigcup_{\lambda\in\Lambda}(W+\lambda)$, a union of open translates, so $\pi(W)$ is open in $T_\Lambda$ by [F1]. [F1, F15, step 3.2]

5.1 Take all open balls $U\subseteq\mathbb C$ on which $\pi$ is injective. These include $B(z,\delta/2)$ for every $z$, since two points in such a ball with the same class differ by a lattice element of modulus $<\delta$. For each such $U$, the restriction $\pi|_U$ is continuous, open and bijective onto the open set $\pi(U)$ by step 4.1. Thus $\varphi_U:=(\pi|_U)^{-1}:\pi(U)\to U$ is a homeomorphism onto an open subset of $\mathbb C$, hence a chart in the sense of [F16]. [F16, F17, step 3.1, step 4.1]

5.2 $T_\Lambda$ is Hausdorff: if $[z]\ne[w]$, then $p:=w-z\notin\Lambda$, and with $r=\operatorname{dist}(p,\Lambda)>0$ from step 3.1 the open sets $\pi\bigl(B(z,r/2)\bigr)$ and $\pi\bigl(B(w,r/2)\bigr)$ are disjoint, since $a\in B(z,r/2)$ and $b\in B(w,r/2)$ with $\pi(a)=\pi(b)$ would give $b-a\in\Lambda$ and $|p-(b-a)|\le|w-b|+|z-a|<r$, contradicting $r=\operatorname{dist}(p,\Lambda)$. [step 3.1, step 4.1]

5.3 $T_\Lambda$ is second countable: by [F7] and [F2] the topology of $\mathbb C$ has a countable basis $\mathcal B$ of rational boxes, and $\{\pi(B):B\in\mathcal B\}$ is a countable family of open subsets of $T_\Lambda$ by step 4.1; it is a basis, because for open $W\subseteq T_\Lambda$ and $x\in W$ one picks $z\in\pi^{-1}(x)$, then a box $B\in\mathcal B$ with $z\in B\subseteq\pi^{-1}(W)$ (possible since $\pi^{-1}(W)$ is open by [F1]), and then $x\in\pi(B)\subseteq W$. [F1, F2, F7, step 4.1]

6.1 The domains of the charts of step 5.1 cover $T_\Lambda$, since the family includes the charts from $B(z,\delta/2)$ for every $z\in\mathbb C$, so the charts $\varphi_z$ of step 5.1 form an atlas; any two are compatible: for charts $\varphi_U,\varphi_V$ of this family put $\Omega:=\varphi_U\bigl(\pi(U)\cap\pi(V)\bigr)$, an open subset of $\mathbb C$, and for $u\in\Omega$ let $v(u):=\varphi_V(\pi(u))$, so that $u-v(u)\in\Lambda$; fixing $u_0\in\Omega$ and $\lambda_0:=u_0-v(u_0)$, continuity of $u\mapsto v(u)$ (a composite of the continuous maps $\pi$, $\varphi_V$) and step 2.1 give a neighbourhood of $u_0$ on which $|(u-v(u))-\lambda_0|<\delta$, and since $(u-v(u))-\lambda_0\in\Lambda$ and all nonzero lattice elements have modulus $\ge\delta$ by step 2.1, there $u-v(u)=\lambda_0$; hence $\varphi_V\circ\varphi_U^{-1}$ equals the translation $u\mapsto u-\lambda_0$ near each point of its open domain $\Omega$, and is holomorphic. [F16, step 2.1, step 5.1]

6.2 $\pi$ is holomorphic: use the identity chart on $\mathbb C$ from [F18]. For every chart $\varphi_U$ of step 5.1, its expression $\varphi_U\circ\pi$ is the identity on $U$, hence holomorphic. The balls in that family cover $\mathbb C$, so [F16] gives holomorphy of $\pi$ at every point. [F16, F18, step 5.1]

7.1 Collecting: the charts of step 5.1 are pairwise compatible by step 6.1 and cover $T_\Lambda$; $T_\Lambda$ is nonempty and connected (step 1.4), Hausdorff (step 5.2) and second countable (step 5.3), so $T_\Lambda$ is a Riemann surface by [F16], and it is compact by step 2.2; $\pi$ is a covering map by step 4.1 and holomorphic by step 6.2, so it is a holomorphic covering map. The construction uses only the set $\Lambda$ and the metric and quotient structures attached to it: a change of representatives of a class does not change $\pi$, and the family of all open balls on which $\pi$ is injective is determined by $\Lambda$ alone. The basis-dependent constant $\delta$ only proves that this family covers the quotient; it does not restrict the family defining the atlas. Thus changing the oriented basis leaves this atlas unchanged. [F1, F16, step 5.1, step 6.1] ∎

The completion of the square in step 2.1 is the only place where the real-linear independence of the basis is used quantitatively: it produces the uniform gap $\delta$ that simultaneously isolates the lattice points, forces the restrictions of $\pi$ to be injective, and separates classes for the Hausdorff property. The rounding argument in step 2.2 is the classical statement that a fundamental parallelogram is a fundamental domain.
