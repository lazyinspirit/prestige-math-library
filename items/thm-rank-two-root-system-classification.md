---
id: thm-rank-two-root-system-classification
kind: theorem
title: Rank-two root-system classification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system, prop-root-systems-decompose-uniquely-into-irreducible-components, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, def-coroot-and-dual-root-system, def-weyl-group-of-a-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, Proposition 2.48 and Lemma 2.51 and Proposition 2.49, printed pp. 152-156"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Theorems 21.9-21.10, printed pp. 113-114"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system, and let
$\alpha,\beta\in\Phi$ be nonproportional roots. Write
$$n_{\alpha\beta}=\frac{2(\beta,\alpha)}{(\alpha,\alpha)},\qquad n_{\beta\alpha}=\frac{2(\alpha,\beta)}{(\beta,\beta)}$$
for the two Cartan integers, and let $\theta\in(0,\pi)$ be the angle between
$\alpha$ and $\beta$.

(i) $n_{\alpha\beta}n_{\beta\alpha}=4\cos^{2}\theta\in\{0,1,2,3\}$. With
$|\alpha|\ge|\beta|$ the possibilities are exactly: $n_{\alpha\beta}=n_{\beta\alpha}=0$
and $\theta=90^{\circ}$; $|\alpha|^{2}=|\beta|^{2}$ and either $n_{\alpha\beta}=n_{\beta\alpha}=1$
with $\theta=60^{\circ}$ or $n_{\alpha\beta}=n_{\beta\alpha}=-1$ with
$\theta=120^{\circ}$; $|\alpha|^{2}=2|\beta|^{2}$ and either
$(n_{\alpha\beta},n_{\beta\alpha})=(1,2)$ with $\theta=45^{\circ}$ or
$(n_{\alpha\beta},n_{\beta\alpha})=(-1,-2)$ with $\theta=135^{\circ}$; and
$|\alpha|^{2}=3|\beta|^{2}$ and either $(n_{\alpha\beta},n_{\beta\alpha})=(1,3)$
with $\theta=30^{\circ}$ or $(n_{\alpha\beta},n_{\beta\alpha})=(-1,-3)$ with
$\theta=150^{\circ}$.

(ii) If $(\alpha,\beta)>0$ then $\alpha-\beta\in\Phi$; if $(\alpha,\beta)<0$
then $\alpha+\beta\in\Phi$.

(iii) If $\alpha,\beta$ are distinct simple roots of $\Phi$ relative to some
positive system, then $(\alpha,\beta)\le0$ and $\alpha-\beta\notin\Phi$.

(iv) If $E$ has dimension two and $\{\alpha,\beta\}$ is a base of $\Phi$, then
$(\alpha,\beta)\le0$, so the angle is nonacute: it is one of $90^{\circ}$,
$120^{\circ}$, $135^{\circ}$, $150^{\circ}$. The irreducible reduced
crystallographic rank-two root systems are exactly $A_2$ (three positive
roots), $B_2\cong C_2$ (four positive roots) and $G_2$ (six positive roots),
while the reducible case is $A_1\sqcup A_1$.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ in the finite-dimensional real inner product space $E$, nonproportional roots $\alpha,\beta\in\Phi$, and the notation $n_{\alpha\beta}$, $n_{\beta\alpha}$, $\theta$ of the statement.

[L1] $\Phi$ is finite, spans $E$, $0\notin\Phi$, $s_\gamma(\Phi)=\Phi$, $2(\delta,\gamma)/(\gamma,\gamma)\in\mathbb Z$, and $\mathbb R\gamma\cap\Phi=\{\pm\gamma\}$ for all roots ([[def-reduced-crystallographic-euclidean-root-system]]).

[L2] $s_\gamma(x)=x-(x,\gamma^{\vee})\gamma=x-\frac{2(x,\gamma)}{(\gamma,\gamma)}\gamma$ is orthogonal, equals the identity on $\gamma^{\perp}$, and sends $\gamma$ to $-\gamma$ ([[def-weyl-group-of-a-root-system]], [[def-coroot-and-dual-root-system]]).

[L3] Cauchy-Schwarz: $|(x,y)|\le|x||y|$ for all $x,y$ with equality if and only if $x,y$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[L4] A reducible rank-two system is the orthogonal disjoint union of root systems spanning pairwise orthogonal subspaces that span $E$, uniquely up to order ([[prop-root-systems-decompose-uniquely-into-irreducible-components]]).

[L5] A finite-dimensional vector space over an infinite field is not a finite union of proper linear subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

## Proof

**Proof technique:** direct.

1.1 For a linear subspace $V\subseteq E$ with $\Phi\cap V\ne\varnothing$, the set $\Phi\cap V$ is a reduced crystallographic root system in $\operatorname{span}(\Phi\cap V)$: it is finite, contains no zero vector, inherits integrality and reducedness, and $s_\gamma(\Phi\cap V)\subseteq\Phi\cap V$ for $\gamma\in\Phi\cap V$ because $s_\gamma$ preserves $\Phi$ and maps $V$ into $V$. In particular the plane subsystem $\Phi\cap\operatorname{span}(\alpha,\beta)$ is a rank-two reduced crystallographic root system. [L1, L2, algebra]

1.2 Both $n_{\alpha\beta}$ and $n_{\beta\alpha}$ are integers, and $$n_{\alpha\beta}n_{\beta\alpha} =\frac{4(\alpha,\beta)^{2}}{(\alpha,\alpha)(\beta,\beta)} =4\cos^{2}\theta .$$ Since $\alpha,\beta$ are nonproportional, Cauchy-Schwarz gives $|(\alpha,\beta)|<|\alpha|\,|\beta|$, so $0\le4\cos^{2}\theta<4$; being a product of integers, $4\cos^{2}\theta$ is a nonnegative integer, hence lies in $\{0,1,2,3\}$. If $|\alpha|\ge|\beta|$ then $$|n_{\alpha\beta}|=2|\cos\theta|\,\frac{|\beta|}{|\alpha|} \le2|\cos\theta|\,\frac{|\alpha|}{|\beta|}=|n_{\beta\alpha}|,$$ and both absolute values cannot be at least $2$, since then their product would be at least $4$. Hence $|n_{\alpha\beta}|\in\{0,1\}$; moreover $n_{\alpha\beta}\ne0$ if and only if $n_{\beta\alpha}\ne0$, and then $n_{\alpha\beta}=\pm1$, $n_{\beta\alpha}=\pm(n_{\alpha\beta}n_{\beta\alpha})$ with the same sign, and $|\alpha|^{2}/|\beta|^{2}=n_{\beta\alpha}/n_{\alpha\beta}$, because $n_{\beta\alpha}/n_{\alpha\beta}=(\alpha,\alpha)/(\beta,\beta)$. [L1, L2, L3, algebra]

1.3 Fix a vector $v\in E$ with $(v,\gamma)\ne0$ for every $\gamma\in\Phi$, which exists because $\Phi$ is finite and $E$ is not a finite union of the proper subspaces $\gamma^{\perp}$ [L5]. Call $\gamma$ positive when $(v,\gamma)>0$ and negative otherwise, so that $\Phi$ is the disjoint union of its positive and negative roots and the negative roots are the negatives of the positive ones; call a positive root simple when it is not a sum of two positive roots. If a positive root is not simple, write it as a sum of two positive roots; the value of $v$ on each summand is strictly smaller than on the sum, so iterating the decomposition and always decomposing a summand that is not simple terminates after finitely many steps (the values of $v$ on positive roots form a finite set and strictly decrease along the iteration). The terminal summands are simple, so every positive root is a sum of simple roots. [L1, L2, L5, algebra]

1.4 (Reducible case) If $\Phi$ is a reducible rank-two root system then $\Phi=\Phi_1\sqcup\Phi_2$ with $\Phi_i$ root systems spanning pairwise orthogonal nonzero subspaces $E_i$ with $E=E_1\oplus E_2$ [L4]; hence $\dim E_i=1$, and a rank-one reduced crystallographic root system is $\{\pm\gamma\}$ for its unique positive root $\gamma$, since every root lies on the line $\mathbb R\gamma$ and reducedness excludes proper multiples. Thus the reducible rank-two system is $A_1\sqcup A_1$. [L1, L4, algebra]

2.1 With $|\alpha|\ge|\beta|$, the identity of step 1.2 enumerates the possibilities. If $n_{\alpha\beta}n_{\beta\alpha}=0$ then $(n_{\alpha\beta},n_{\beta\alpha})=(0,0)$ and $\theta=90^{\circ}$. If the product is $1$ then $n_{\alpha\beta}=n_{\beta\alpha}=\pm1$, so $|\alpha|^{2}=|\beta|^{2}$, $4\cos^{2}\theta=1$, and $\theta=60^{\circ}$ if $\cos\theta>0$, $\theta=120^{\circ}$ if $\cos\theta<0$. If the product is $2$ then $n_{\alpha\beta}=\pm1$, $n_{\beta\alpha}=\pm2$ with the same sign, $|\alpha|^{2}=2|\beta|^{2}$, $4\cos^{2}\theta=2$, and the angle is $45^{\circ}$ or $135^{\circ}$ according to the sign of $\cos\theta$. If the product is $3$ then $n_{\alpha\beta}=\pm1$, $n_{\beta\alpha}=\pm3$, $|\alpha|^{2}=3|\beta|^{2}$, and the angle is $30^{\circ}$ or $150^{\circ}$. [step 1.2, algebra]

2.2 Assume $(\alpha,\beta)>0$. Then both Cartan integers are positive, so by step 1.2 the one attached to the longer of the two roots equals $1$: if $|\alpha|\le|\beta|$ then $n_{\beta\alpha}=1$ and $s_\beta(\alpha)=\alpha-n_{\beta\alpha}\beta=\alpha-\beta\in\Phi$; if $|\alpha|\ge|\beta|$ then $n_{\alpha\beta}=1$ and $s_\alpha(\beta)=\beta-n_{\alpha\beta}\alpha=\beta-\alpha\in\Phi$, so that $\alpha-\beta=-(\beta-\alpha)\in\Phi$. Applying this to $-\alpha$ gives the companion statement: if $(\alpha,\beta)<0$ then $\alpha+\beta\in\Phi$. [L2, step 1.2, algebra]

3.1 If $\alpha,\beta$ are distinct simple roots and $(\alpha,\beta)>0$, then $\alpha-\beta\in\Phi$ by step 2.2, and this root is positive or negative: if it is positive then $\alpha=(\alpha-\beta)+\beta$ exhibits $\alpha$ as a sum of two positive roots, and if it is negative then $\beta=(\beta-\alpha)+\alpha$ exhibits $\beta$ as a sum of two positive roots, contradicting simplicity in either case. Hence $(\alpha,\beta)\le0$. The same reasoning shows $\alpha-\beta\notin\Phi$, since a root $\alpha-\beta$ is positive, giving the first contradiction, or negative, giving the second. [step 2.2, step 1.3, algebra]

3.2 (Root strings) Let $\alpha\in\Phi$ and $\beta\in\Phi$ with $\beta\ne\pm\alpha$. Then the set of integers $k$ with $\beta+k\alpha\in\Phi$ is a nonempty interval $\{-p,-p+1,\dots,q\}$ of consecutive integers with $p\ge0$, $q\ge0$, no gaps, and $p-q=n_{\alpha\beta}$; moreover $p+q\le3$. Indeed, the set is nonempty because $k=0$ occurs, and is invariant under $k\mapsto-n_{\alpha\beta}-k$ because $s_\alpha(\beta+k\alpha)=\beta-(n_{\alpha\beta}+k)\alpha\in\Phi$, so it is finite and symmetric about $-n_{\alpha\beta}/2$. If it had a gap, there would be $r<s-1$ with $\beta+r\alpha\in\Phi$, $\beta+s\alpha\in\Phi$ and $\beta+(r+1)\alpha,\beta+(s-1)\alpha\notin\Phi$; then $(\beta+r\alpha,\alpha)\ge0$, since otherwise step 2.2 applied to $-\alpha$ would give $\beta+(r+1)\alpha\in\Phi$, and similarly $(\beta+s\alpha,\alpha)\le0$; subtracting gives $(s-r)(\alpha,\alpha)\le0$, a contradiction. Hence there are no gaps, and the symmetry of an interval about $-n_{\alpha\beta}/2$ gives $p-q=n_{\alpha\beta}$. Finally, replacing $\beta$ by $\beta+q\alpha$ reduces to the case $q=0$ and $p=n_{\alpha\beta}$, and $|n_{\alpha\beta}|\le3$ by steps 1.2 and 2.1 applied to the nonproportional pair $(\beta+q\alpha,\alpha)$; if that pair is proportional then reducedness gives at most three elements. [L1, L2, step 2.2, step 1.2, step 2.1, algebra]

4.1 In a rank-two root system the simple roots are linearly independent, hence exactly two; explicitly, if $\sum_{i\in I}c_i\alpha_i=\sum_{j\in J}c_j\alpha_j$ with disjoint finite index sets and positive real coefficients $c_i,c_j$ (which is the shape of every nontrivial linear relation), then for $\gamma=\sum_{i\in I}c_i\alpha_i\ne0$ one computes $$0<(\gamma,\gamma)=\Big(\sum_{i\in I}c_i\alpha_i,\sum_{j\in J}c_j\alpha_j\Big) =\sum_{i\in I,j\in J}c_ic_j(\alpha_i,\alpha_j)\le0,$$ because the two index sets are disjoint and distinct simple roots have nonpositive inner product by step 3.1. Therefore the simple roots are independent; since they span $E$ by step 1.3, a rank-two system has exactly two simple roots $\alpha_1,\alpha_2$, every root is $\pm(m\alpha_1+n\alpha_2)$ with $m,n\ge0$ integers, and the Cartan matrix is one of $$\begin{pmatrix}2&0\\0&2\end{pmatrix},\ \begin{pmatrix}2&-1\\-1&2\end{pmatrix},\ \begin{pmatrix}2&-2\\-1&2\end{pmatrix},\ \begin{pmatrix}2&-1\\-2&2\end{pmatrix},\ \begin{pmatrix}2&-3\\-1&2\end{pmatrix},\ \begin{pmatrix}2&-1\\-3&2\end{pmatrix},$$ because both off-diagonal entries are nonpositive integers whose product is one of $0,1,2,3$. [L1, step 1.3, step 3.1, step 1.2, algebra]

4.2 (Descent and constraints for a base) Let $\alpha_1,\alpha_2$ be the simple roots of a rank-two system in the ordering of step 1.3, and let $\gamma=m\alpha_1+n\alpha_2$ be a positive root, $m,n\ge0$ integers. Write $c=n_{\alpha_1\alpha_2}=2(\alpha_1,\alpha_2)/(\alpha_1,\alpha_1)$ and $c'=n_{\alpha_2\alpha_1}=2(\alpha_1,\alpha_2)/(\alpha_2,\alpha_2)$; both are nonpositive integers with product in $\{0,1,2,3\}$ by steps 3.1 and 1.2. Then: (a) $n_{\alpha_1\gamma}=2m+nc$ and $n_{\alpha_2\gamma}=2n+mc'$, and the reflected roots $s_{\alpha_1}\gamma=-(m+nc)\alpha_1+n\alpha_2$ and $s_{\alpha_2}\gamma=m\alpha_1-(n+mc')\alpha_2$ again have coefficients of one sign; hence if $n\ge1$ then $-(m+nc)\ge0$, that is $m\le n|c|$, and if $m\ge1$ then $n\le m|c'|$. (b) The string bounds of step 3.2 give $|2m+nc|\le3$ and $|2n+mc'|\le3$. (c) Reducedness gives: if $n=0$ then $m=1$, and if $m=0$ then $n=1$. (d) If $\gamma\ne\alpha_1$ and $2m+nc\ge1$, then the $\alpha_1$-string through $\gamma$ contains $(m-1)\alpha_1+n\alpha_2$, so this vector lies in $\Phi$ and $m\ge1$; and if $\gamma\ne\alpha_2$ and $2n+mc'\ge1$, then $m\alpha_1+(n-1)\alpha_2\in\Phi$ and $n\ge1$. [L2, step 3.1, step 3.2, step 1.2, algebra]

5.1 (The three irreducible cases) Let $\Phi$ be an irreducible rank-two root system with simple roots $\alpha_1,\alpha_2$ and Cartan matrix as in step 4.1; exclude the first matrix, which gives a reducible system by step 1.4 (no positive root has both coefficients nonzero by (a) of step 4.2). For the five remaining cases define $$K=\{m\alpha_1+n\alpha_2:\ (m,n)\in S\},\qquad S=\begin{cases} \{(1,0),(0,1),(1,1)\}, & (c,c')=(-1,-1),\\ \{(1,0),(0,1),(1,1),(2,1)\}, & (c,c')=(-2,-1),\\ \{(1,0),(0,1),(1,1),(1,2)\}, & (c,c')=(-1,-2),\\ \{(1,0),(0,1),(1,1),(2,1),(3,1),(3,2)\}, & (c,c')=(-3,-1),\\ \{(1,0),(0,1),(1,1),(1,2),(1,3),(2,3)\}, & (c,c')=(-1,-3). \end{cases}$$ Every element of $K$ is a root: $\alpha_1,\alpha_2$ are simple; $\alpha_1+\alpha_2$, $\alpha_1+2\alpha_2$, $\alpha_1+3\alpha_2$ are the images of $\alpha_1$ under the reflections $s_{\alpha_2}$, and $\alpha_1+\alpha_2$, $2\alpha_1+\alpha_2$, $3\alpha_1+\alpha_2$ are the images of $\alpha_2$ under $s_{\alpha_1}$; for $(c,c')=(-3,-1)$ one has $2\alpha_1+\alpha_2=s_{\alpha_1}(\alpha_1+\alpha_2)$ and $3\alpha_1+2\alpha_2=s_{\alpha_2}(3\alpha_1+\alpha_2)$, and the last case is its mirror image. In each case $K$ has $3$, $4$, $4$, $6$, $6$ elements and spans $E$. [L1, L2, step 3.1, step 4.1, step 1.4, step 4.2, algebra]

6.1 (Exhaustiveness) In each of the five cases of step 5.1, every positive root lies in $K$. Suppose not, and choose a positive root $\gamma=m\alpha_1+n\alpha_2$ of least height among the positive roots outside $K$; it is not simple, so by step 1.3 it is a sum of two positive roots of smaller heights, and by minimality of $h=m+n$ both summands lie in $K$. Hence $\gamma$ is a sum of two elements of $K$, and each such sum is either an element of $K$, or violates one of conditions (a)-(c) of step 4.2, or descends by (d) to such a sum, or is excluded by reducedness [L1]; the following complete lists of the coordinate pairs of the sums of two elements of $K$ verify this case by case. For $(c,c')=(-1,-1)$ the sums are $(2,0),(1,1),(2,1),(0,2),(1,2),(2,2)$: $(2,0)$ and $(0,2)$ violate (c), $(2,1)$ violates $m\le n|c|=n$ and $(1,2)$ violates $n\le m|c'|=m$ in (a), and $(2,2)=2(\alpha_1+\alpha_2)$ is excluded by reducedness because $\alpha_1+\alpha_2\in K$ is a root. For $(c,c')=(-2,-1)$ the sums with $n\ge1$ are $(2,0),(1,1),(2,1),(3,1),(0,2),(1,2),(2,2),(3,2),(4,2)$: $(2,0)$ and $(0,2)$ violate (c), $(3,1)$ violates $m\le2n$ and $(1,2)$ violates $n\le m$ in (a), $(2,2)=2(\alpha_1+\alpha_2)$ and $(4,2)=2(2\alpha_1+\alpha_2)$ are excluded by reducedness, and $(3,2)$ satisfies (a)-(c) but (d) applied to $\alpha_1$ gives $(2,2)\in\Phi$, already excluded. The case $(c,c')=(-1,-2)$ is the mirror image with the two coordinates and the two simple roots interchanged. For $(c,c')=(-3,-1)$ the sums of two elements of $K$ are $(2,0),(1,1),(2,1),(3,1),(4,1),(4,2),(0,2),(1,2),(2,2),(3,2),(3,3),(4,3),(5,2),(5,3),(6,2),(6,3),(6,4)$: $(2,0)$ and $(0,2)$ violate (c), $(4,1)$ violates $m\le3n$ and $(1,2)$ violates $n\le m$ in (a), $(5,2)$ and $(6,2)$ violate $|2m-3n|\le3$ in (b), $(3,3)=3(\alpha_1+\alpha_2)$, $(2,2)=2(\alpha_1+\alpha_2)$, $(4,2)=2(2\alpha_1+\alpha_2)$ and $(6,3)=3(2\alpha_1+\alpha_2)$ are excluded by reducedness because $\alpha_1+\alpha_2$ and $2\alpha_1+\alpha_2$ lie in $K$ and are roots, $(5,3)$ descends by (d) applied to $\alpha_1$ to $(4,3)$, and $(4,3)$ and $(6,4)$ descend by (d) applied to $\alpha_2$ to $(4,2)$ and $(6,3)$, all already excluded, while $(1,1),(2,1),(3,1),(3,2)$ lie in $K$. The mirror case $(c,c')=(-1,-3)$ is handled by the same interchange of coordinates and simple roots. Thus no positive root lies outside $K$, so $\Phi=K\sqcup(-K)$ in each of the five cases, and the irreducible rank-two root systems are exactly the systems with $3$, $4$, $4$, $6$, $6$ positive roots. [L1, step 1.3, step 4.2, step 5.1, algebra] ∎

7.1 The systems of 3, 4 and 6 positive roots are the root systems traditionally called $A_2$, $B_2\cong C_2$ and $G_2$: for $(c,c')=(-1,-1)$ the roots are $\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2)$ with $|\alpha_1|=|\alpha_2|$ and angle $120^{\circ}$; for $(c,c')=(-2,-1)$ they are $\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2),\pm(2\alpha_1+\alpha_2)$ with $|\alpha_2|^{2}=2|\alpha_1|^{2}$ and angle $135^{\circ}$; and for $(c,c')=(-3,-1)$ they are the six positive roots listed in $K$ with $|\alpha_2|^{2}=3|\alpha_1|^{2}$ and angle $150^{\circ}$. The two middle cases are isomorphic as root systems: the linear map that rotates the plane by $45^{\circ}$ and then rescales uniformly sends the four short root directions and the four long root directions of the $(-2,-1)$ system onto those of the $(-1,-2)$ system, and Cartan integers are unchanged by a uniform rescaling. Combining with steps 2.1, 3.1, 1.4 and 6.1 gives the full rank-two classification, and the angle statement of (iv) is step 3.1. [step 2.1, step 3.1, step 1.4, step 6.1, algebra] ∎
