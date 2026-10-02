---
id: lem-discrete-subgroups-of-real-vector-spaces-are-lattices
kind: lemma
title: Discrete subgroups of a real vector space are lattices
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-archimedean-reciprocal
  - cor-independent-set-is-no-larger-than-a-finite-spanning-set
  - def-dimension
  - def-linear-basis
  - def-linear-independence
  - def-metric-ball
  - def-metric-bounded-diameter
  - def-metric-topology
  - def-norm-and-normed-space
  - def-subspace-topology-top
  - def-vector-space
  - lem-subgroups-of-z-are-cyclic
  - thm-all-norms-on-rn-are-equivalent
  - thm-lagrange
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Lemma 4.14 and Proposition 4.15 pp.73-75: a discrete subgroup is finitely generated and free, of rank at most the dimension."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "§15.2 p.7: a discrete subgroup of R^{r+s} is finitely generated; Lemma 14.3."
    - title: "Jurgen Neukirch, Algebraic Number Theory (Springer, 1999)"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "§I.4 Proposition (4.2) and Lemma (4.3) pp.24-25: a subgroup is a lattice exactly when it is discrete."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $V$ be a finite-dimensional real vector space
([[def-vector-space]], [[def-dimension]]) with the topology induced by a norm
([[def-norm-and-normed-space]], [[def-metric-topology]]), and let
$\Gamma\le V$ be a subgroup. The following are equivalent:

(a) $\Gamma$ is discrete in the subspace topology
([[def-subspace-topology-top]]);

(b) every bounded subset of $V$ ([[def-metric-bounded-diameter]]) meets
$\Gamma$ in a finite set;

(c) $\Gamma=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_r$ for some
$\mathbb R$-linearly independent $v_1,\dots,v_r\in V$
([[def-linear-independence]]) with $r\le\dim_{\mathbb R}V$; that is, $\Gamma$ is
a lattice in $V$.

## Facts & Assumptions

**Given:** A finite-dimensional real vector space $V$ of dimension $n$ with a
norm, the induced metric and topology, and a subgroup $\Gamma\le V$.

[F1] $\varnothing$ is a linearly independent list and every linearly independent
subset of $V$ has at most $n$ elements, because $V$ has a basis of $n$ elements
([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]],
[[def-linear-independence]], [[def-linear-basis]]).

[F2] The induced metric is $d(x,y)=\lVert x-y\rVert$, the norm is homogeneous
and satisfies the triangle inequality, a bounded set is contained in some ball,
and balls are translation invariant; open sets contain a ball around each of
their points ([[def-norm-and-normed-space]], [[def-metric-topology]],
[[def-metric-ball]], [[def-metric-bounded-diameter]]).

[F3] Identifying $V$ with $\mathbb R^n$ by one basis, the given norm corresponds
to a norm on $\mathbb R^n$. Equivalence with the coordinate maximum norm gives
a constant $c>0$ such that $\lVert x\rVert\ge c\lVert x\rVert_\infty$ in these
coordinates ([[thm-all-norms-on-rn-are-equivalent]]).

[F4] Every subgroup of $(\mathbb{Z},+)$ is $d\mathbb{Z}$ for a unique
nonnegative integer $d$ ([[lem-subgroups-of-z-are-cyclic]]). In particular,
the image of a subgroup of $\mathbb{Z}^m$ under projection to one coordinate
is either $\{0\}$ or $d\mathbb{Z}$ for some $d>0$.

[F5] A finite group of order $N$ has $u^N=1$ for every element $u$, by
Lagrange's theorem ([[thm-lagrange]]).

[F6] For every $\varepsilon>0$ there is an integer $q\ge1$ with
$1/q<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** a direct chain (a) implies (b) implies (c) implies (a):
isolation and a finite coordinate grid give bounded finiteness. A bounded
fundamental parallelepiped gives a finite-index inclusion into the integer span
of a maximal independent tuple. Scaling embeds the group in $\mathbb Z^r$; a
finite-rank subgroup induction then supplies a lattice basis using only the
cyclic-subgroup-of-$\mathbb Z$ result.

First handle $n=0$. Then $V=\{0\}$ and $\Gamma=\{0\}$, so (a), (b), and (c)
hold with $r=0$. Assume $n\ge1$ below.

1.1 Suppose first that $\Gamma$ is discrete. Then $\{0\}$ is open in the subspace topology on $\Gamma$, so $\{0\}=\Gamma\cap U$ for some open $U\subseteq V$; choosing a ball around $0$ inside $U$ gives an $\varepsilon>0$ with $\Gamma\cap B(0,\varepsilon)=\{0\}$. [F2]
1.2 Suppose next that (b) holds. The set $\Gamma\cap B(0,1)$ is then finite; if it is $\{0\}$ take $\varepsilon=1$, and otherwise let $\delta:=\min\{\lVert\gamma\rVert:0\ne\gamma\in\Gamma\cap B(0,1)\}>0$, a minimum of a nonempty finite set of positive reals, so that again $\Gamma\cap B(0,\delta)=\{0\}$. Since balls are translation invariant in the metric of a norm, $B(\gamma,\delta)=\gamma+B(0,\delta)$ for every $\gamma\in\Gamma$, so $\Gamma\cap B(\gamma,\delta)=\{\gamma\}$: every point of $\Gamma$ is isolated in $\Gamma$, that is, $\Gamma$ is discrete. Hence (b) implies (a). [F2]
1.3 Assume (b) from here on. By [F1] the lengths of the $\mathbb R$-linearly independent finite tuples of elements of $\Gamma$ form a nonempty subset of $\{0,1,\dots,n\}$, so a maximum $r$ exists; select an $\mathbb R$-linearly independent tuple $v_1,\dots,v_r\in\Gamma$, and put $W:=\operatorname{span}_{\mathbb R}(v_1,\dots,v_r)$, so $\dim_{\mathbb R}W=r$. [F1]
1.4 Put $\Gamma_0:=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_r\subseteq\Gamma$ and $P:=\{\sum_{i=1}^rt_iv_i:0\le t_i<1\}$. Since $\lVert\sum_it_iv_i\rVert\le\sum_i\lvert t_i\rvert\,\lVert v_i\rVert\le\sum_i\lVert v_i\rVert$, the set $P$ is bounded, so $F:=\Gamma\cap P$ is finite by (b). [F2]
2.1 This proves (a)$\Rightarrow$(b) without selecting a sequence from a bounded set. Fix a basis $e_1,\dots,e_n$ of $V$ and put $S:=\sum_{i=1}^n\lVert e_i\rVert>0$. Let $B\subseteq V$ be bounded; if $B=\varnothing$ the conclusion is immediate. Otherwise choose a ball $B(x_0,R)$ containing it. Let $a_i$ be the coordinates of $x_0$. By [F3] there is $c>0$ with $\lVert v\rVert\ge c\lVert(v_i)\rVert_\infty$ in these coordinates, so every $x\in B$ satisfies $\max_i|x_i-a_i|<R/c$. Set $M:=\max\{1,R/c\}$; then the coordinate vectors of $B$ lie in the box $\prod_i[a_i-M,a_i+M]$. Set $\delta:=\varepsilon/(2S)>0$ and choose an integer $q\ge1$ with $1/q<\delta/(2M)$ by [F6]. Divide each coordinate interval into $q$ equal subintervals and take their finitely many product cells. In one cell, any two coordinate vectors differ by less than $\delta$ in each coordinate, so the corresponding points $x,y$ satisfy $\lVert x-y\rVert\le\sum_i|x_i-y_i|\lVert e_i\rVert<\delta S=\varepsilon/2<\varepsilon$. By step 1.1, each cell therefore contains at most one point of $\Gamma$. The finite collection of cells covers $B$, so $B\cap\Gamma$ is finite. [F2, F3, F6, step 1.1]
2.2 If $\gamma\in\Gamma\setminus W$, then any relation $\lambda_1v_1+\cdots+\lambda_rv_r+\mu\gamma=0$ must have $\mu=0$, since otherwise it would express $\gamma$ as an element of $W$. The independence of $v_1,\dots,v_r$ then forces every $\lambda_i=0$, so adjoining $\gamma$ would give $r+1$ independent elements of $\Gamma$, contradicting maximality in step 1.3. Thus $\Gamma\subseteq W$, and since the $v_i$ lie in $\Gamma$, $\operatorname{span}_{\mathbb R}\Gamma=W$. [step 1.3]
3.1 Every $\gamma\in\Gamma$ differs from an element of $\Gamma_0$ by an element of $F$: by step 2.2 write $\gamma=\sum_i s_i v_i$ with $s_i\in\mathbb R$ and write $s_i=m_i+t_i$ with $m_i\in\mathbb Z$ and $0\le t_i<1$; then $\gamma-\sum_i m_i v_i\in\Gamma\cap P=F$. [step 1.4, step 2.2]
4.1 The map $F\to\Gamma/\Gamma_0$, $f\mapsto f+\Gamma_0$, is surjective by step 3.1. Thus $\Gamma/\Gamma_0$ is finite; let its order be $N\ge1$. By [F5], $N\gamma\in\Gamma_0$ for every $\gamma\in\Gamma$. The map $T:\Gamma\to\Gamma_0$, $T(\gamma)=N\gamma$, is an injective homomorphism: if $N\gamma=0$, then $\gamma=0$ because $V$ is a real vector space and $N>0$. Consequently its image is a subgroup of $\Gamma_0\cong\mathbb Z^r$. [F5, step 1.4, step 3.1]
5.1 By step 4.1, $T(\Gamma)$ is a subgroup of $\Gamma_0\cong\mathbb Z^r$. For this use, every subgroup $H\le\mathbb Z^m$ has a finite $\mathbb Z$-basis of length at most $m$, by induction on $m$. For $m=0$ the subgroup is zero and the empty list is a basis. For $m\ge1$, project $H$ onto its first coordinate. By [F4] the image is $d\mathbb Z$ for some $d\ge0$. If $d=0$, identify $H$ with a subgroup of the last $m-1$ coordinates and apply induction. If $d>0$, choose $h\in H$ with first coordinate $d$; the kernel $H_0$ of that projection is a subgroup of $\mathbb Z^{m-1}$, so induction gives it a basis of length at most $m-1$. Every $x\in H$ has first coordinate $kd$ for some $k\in\mathbb Z$; then $x-kh\in H_0$, so $h$ together with a basis of $H_0$ generates $H$. They are independent because projecting any integer relation to the first coordinate forces the coefficient of $h$ to be zero, after which independence in $H_0$ forces all remaining coefficients to vanish. This proves the claim, including that the basis has at most $m$ elements. [F4, choose, step 4.1]
6.1 Apply step 5.1 to $T(\Gamma)\le\Gamma_0\cong\mathbb Z^r$ and pull its $\mathbb Z$-basis back through the isomorphism $T:\Gamma\to T(\Gamma)$. This gives a $\mathbb Z$-basis $b_1,\dots,b_s$ of $\Gamma$ with $s\le r$. By step 2.2, $v_1,\dots,v_r$ are linearly independent and span $W$, while $\operatorname{span}_{\mathbb R}(b_1,\dots,b_s)=W$ because they generate $\Gamma$. The finite-dimensional independent-set bound [F1] gives $r\le s$, so $s=r$. If $r>0$ and these $r$ spanning vectors were linearly dependent, one could remove a vector and still span $W$, contradicting [F1] applied to $v_1,\dots,v_r$; when $r=0$, the empty list is independent. Hence they are $\mathbb R$-linearly independent and $\Gamma=\mathbb Zb_1\oplus\cdots\oplus\mathbb Zb_r$, proving (c). [F1, step 2.2, step 5.1]
7.1 Finally assume (c): $\Gamma=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_r$ with $v_1,\dots,v_r$ $\mathbb R$-linearly independent. Extend this tuple to a basis $v_1,\dots,v_r,w_1,\dots,w_{n-r}$ of $V$ and let $\varphi:\mathbb R^n\to V$ send the standard basis to it. The function $t\mapsto\lVert\varphi(t)\rVert$ is a norm on $\mathbb R^n$, hence equivalent to the coordinate norm $\lvert t\rvert_\infty=\max_i\lvert t_i\rvert$ by [F3], so there is $c>0$ with $\lVert\varphi(t)\rVert\ge c\,\lvert t\rvert_\infty$ for all $t$. A nonzero element of $\Gamma$ has coordinates $(m_1,\dots,m_r,0,\dots,0)$ with some $m_i\in\mathbb Z\setminus\{0\}$, so $\lvert m\rvert_\infty\ge1$ and $\lVert\gamma\rVert\ge c$; thus $\Gamma\cap B(0,c)=\{0\}$ and $\Gamma$ is discrete, proving (a). This closes the cycle (a)$\Rightarrow$(b)$\Rightarrow$(c)$\Rightarrow$(a). [F1, F3] ∎
