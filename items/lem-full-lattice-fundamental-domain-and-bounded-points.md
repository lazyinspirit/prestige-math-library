---
id: lem-full-lattice-fundamental-domain-and-bounded-points
kind: lemma
title: "Fundamental parallelotope and finite bounded intersections"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-full-euclidean-lattice-and-covolume
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-half-open-box
  - lem-integer-part
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - def-metric-bounded-diameter
  - def-metric-ball
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Lemma 4.14 and Remark 4.16, pp.73-75."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§27 Lemma 27.2, pp.139-140."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$ and let
$\Lambda=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n\subseteq\mathbb R^n$
be a full lattice with covolume $\operatorname{covol}(\Lambda)=|\det B|$,
$B=(b_1\ \cdots\ b_n)$
([[def-full-euclidean-lattice-and-covolume]]). Let

$$P=\Big\{\sum_{i=1}^n t_i b_i : 0<t_i\le 1\Big\}$$

be its half-open fundamental parallelotope. Then:

1. every $x\in\mathbb R^n$ has a unique representation $x=\lambda+p$ with
   $\lambda\in\Lambda$ and $p\in P$;
2. $P$ is Lebesgue measurable and $\lambda_n(P)=\operatorname{covol}(\Lambda)$;
3. every bounded subset $S\subseteq\mathbb R^n$ meets $\Lambda$ in finitely
   many points: $S\cap\Lambda$ is finite.

The convention $0<t_i\le1$ is the published one for half-open boxes,
$(a,b]$-faces ([[def-half-open-box]]); it is a translate of the equally common
$0\le t_i<1$ parallelotope and carries the same volume.

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $n\ge1$, the full lattice
$\Lambda=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n$ with matrix
$B=(b_1\ \cdots\ b_n)$, and its half-open fundamental parallelotope $P$ of the
statement.

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), which is the
choice hypothesis of [F3] and [F4], invoked in step 2.2; no further choice
is used.

[F1] The vectors $b_1,\dots,b_n$ are linearly independent over $\mathbb R$ and
form a real basis of $\mathbb R^n$, and
$\operatorname{covol}(\Lambda)=|\det B|$
([[def-full-euclidean-lattice-and-covolume]]).

[F2] A square real matrix $B$ is invertible if and only if $\det B\ne0$
([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

[F3] Invertible linear maps and Lebesgue measure: if $T:\mathbb R^n\to\mathbb R^n$
is linear with $\det T\ne0$, then $T[E]$ is Lebesgue measurable for every
Lebesgue measurable $E$ and $\lambda_n(T[E])=|\det T|\,\lambda_n(E)$
([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F4] For real endpoints $a_i\le b_i$, the half-open box
$B(a,b)=\prod_{i<n}(a_i,b_i]$ is Lebesgue measurable of
measure $\prod_{i<n}(b_i-a_i)$; in particular the half-open unit cube
$(0,1]^n$ has $\lambda_n\bigl((0,1]^n\bigr)=1$
([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] Integer part: for every real $y$ there is exactly one integer $k$ with
$k\le y<k+1$ ([[lem-integer-part]]).

[F6] For every linear map $L:\mathbb R^m\to\mathbb R^n$ there is a real $K\ge0$
with $\|Lh\|_2\le K\|h\|_2$ for every $h$
([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[F7] A subset $S$ of a metric space is bounded exactly when $S=\varnothing$ or
$S\subseteq B(x_0,r)$ for some point $x_0$ and real $r>0$
([[def-metric-bounded-diameter]], [[def-metric-ball]]); in $\mathbb R^n$ with
the Euclidean metric the triangle inequality gives
$\|s\|\le\|s-x_0\|+\|x_0\|$ for $s\in B(x_0,r)$.

## Proof

1.1 By [F1] the vectors $b_1,\dots,b_n$ form a real basis of $\mathbb R^n$; therefore every $x\in\mathbb R^n$ has a unique coefficient vector $y=(y_1,\dots,y_n)\in\mathbb R^n$ with $x=\sum_i y_ib_i$. [F1, given]
1.2 For every real $y$ there is exactly one pair $(m,t)\in\mathbb Z\times(0,1]$ with $y=m+t$: apply [F5] to $-y$ to get the unique integer $k$ with $k\le-y<k+1$, and put $m:=-k-1$, $t:=y-m$; then $m<y\le m+1$ and hence $t\in(0,1]$. Conversely if $m+t=m'+t'$ with $t,t'\in(0,1]$, then $m-m'=t'-t$ has absolute value $<1$ and is an integer, hence $m=m'$ and $t=t'$. [F5, algebra]
1.3 Let $S\subseteq\mathbb R^n$ be bounded and suppose first $S\ne\varnothing$. By [F7] there are $x_0\in\mathbb R^n$ and $r>0$ with $S\subseteq B(x_0,r)$, so every $s\in S$ satisfies $\|s\|\le\|s-x_0\|+\|x_0\|\le r+\|x_0\|=:M$. [F7, given]
2.1 (Tiling.) Let $x\in\mathbb R^n$ have coefficient vector $y$ as in step 1.1 and write $y_i=m_i+t_i$ as in step 1.2. Put $\lambda=\sum_im_ib_i\in\Lambda$ and $p=\sum_it_ib_i\in P$; then $x=\lambda+p$. For uniqueness, suppose $\lambda+p=\lambda'+p'$ with $\lambda=\sum_im_ib_i$, $\lambda'=\sum_im'_ib_i\in\Lambda$ and $p=\sum_it_ib_i$, $p'=\sum_it'_ib_i\in P$. Then $\sum_i\bigl((m_i-m'_i)+(t_i-t'_i)\bigr)b_i=0$, and linear independence of the $b_i$ forces $(m_i-m'_i)+(t_i-t'_i)=0$ for every $i$. Here $m_i-m'_i$ is an integer and $t'_i-t_i\in(-1,1)$, so $m_i-m'_i=t'_i-t_i\in\mathbb Z\cap(-1,1)=\{0\}$; thus $m_i=m'_i$ and $t_i=t'_i$ for all $i$, that is $\lambda=\lambda'$ and $p=p'$. [F1, step 1.1, step 1.2]
2.2 Let $T:\mathbb R^n\to\mathbb R^n$ be the linear map $T(t)=\sum_it_ib_i$, with matrix $B$. By step 1.1 the map $T$ is a bijection, so the square matrix $B$ is invertible and [F2] gives $\det B\ne0$. Since $T\bigl[(0,1]^n\bigr]=P$ and $(0,1]^n$ is Lebesgue measurable of measure $1$ by [F4], [F3] and [F1] give $\lambda_n(P)=|\det B|\,\lambda_n\bigl((0,1]^n\bigr)=\operatorname{covol}(\Lambda)$, with the Countable Choice hypotheses of [F3] and [F4] supplied by [A1]. [F1, F2, F3, F4, A1, step 1.1]
2.3 For each $i$ the $i$-th coordinate functional $f_i(z):=(B^{-1}z)_i$ is linear, so by [F6] there is $K_i\ge0$ with $|f_i(z)|\le K_i\|z\|_2$ for every $z$. If $\lambda=\sum_im_ib_i\in S$, then $B^{-1}\lambda=(m_1,\dots,m_n)$, so $f_i(\lambda)=m_i$ and step 1.3 gives $|m_i|\le K_iM=:C_i$. [F6, step 1.3]
3.1 Every integer $m_i$ with $|m_i|\le C_i$ satisfies $-\lceil C_i\rceil\le m_i\le\lceil C_i\rceil$; the set $\{m\in\mathbb Z:|m|\le C_i\}$ is therefore a subset of the finite set $\{-\lceil C_i\rceil,\dots,\lceil C_i\rceil\}$ and is finite. Hence $S\cap\Lambda$ is contained in the image under $(m_1,\dots,m_n)\mapsto\sum_im_ib_i$ of the finite set $\prod_{i=1}^n\{m\in\mathbb Z:|m|\le C_i\}$, so $S\cap\Lambda$ is finite; for $S=\varnothing$ it is empty. [F1, step 2.3]
4.1 Step 2.1 proves the unique tiling, step 2.2 the volume $\lambda_n(P)=\operatorname{covol}(\Lambda)$, and step 3.1 the finiteness of $S\cap\Lambda$ for bounded $S$; these are the three claims of the statement. [step 2.1, step 2.2, step 3.1] ∎
