---
id: ex-boundary-free-fundamental-parallelogram
kind: example
title: "Moving the boundary of a fundamental parallelogram"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - def-elliptic-function-for-a-lattice
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - thm-elliptic-function-divisor-laws
  - thm-poles-meromorphic-function-are-discrete-and-countable
  - cor-meromorphic-functions-on-a-domain-form-a-field
  - thm-heine-borel-rn
  - thm-complex-numbers-are-the-real-coordinate-plane
  - lem-complex-conjugation-and-modulus-laws
  - lem-integer-part
  - def-complex-metric-convergence-and-continuity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'Doubly periodic functions', printed pp. 42-44: fundamental parallelograms may be translated, and the boundary is chosen to avoid zeros and poles."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, choice of a fundamental parallelogram avoiding the poles, printed pp. 80-81."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii), equations 23.2.7-23.2.9: lattice poles of wp and the half-period values, used for the explicit Z+iZ computation."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Let $\Lambda=\mathbb Z+i\mathbb Z$ and let
$\wp=\wp_\Lambda$ be its Weierstrass function. For $b\in\mathbb C$ put

$$P_b:=\{b+s+ti:0\le s,t\le1\},\qquad \partial P_b=\{b+s+ti:0\le s,t\le1,\ s\in\{0,1\}\ \text{or}\ t\in\{0,1\}\}.$$

Then:

1. the translate with $a=(1+i)/4$ has no pole of $\wp$ on $\partial P_a$: the
   points of $\partial P_a$ have real part or imaginary part equal to $1/4$ or
   $5/4$, so none of them is a lattice point;
2. the unshifted parallelogram $P_0$ has poles of $\wp$ on its boundary: its
   four vertices $0,1,i,1+i$ are lattice points and belong to $\partial P_0$;
3. for **every** nonzero $\Lambda$-elliptic meromorphic function $f$ the
   translates whose boundary avoids the zeros and poles of $f$ are generic: in
   every nonempty open ball of basepoints $b$ there is a $b$ with
   $\partial P_b\cap(\operatorname{Zer}(f)\cup\operatorname{Pol}(f))=\varnothing$.
   In particular the divisor of $f$ on the torus $T_\Lambda$ has only finitely
   many classes modulo $\Lambda$, and the parallelogram hypotheses of the
   divisor law can always be met.

## Facts & Assumptions

**Given:** The lattice $\Lambda=\mathbb Z+i\mathbb Z$, the parallelograms $P_b$ and their boundaries $\partial P_b$ as displayed, the Weierstrass function $\wp=\wp_\Lambda$, and a nonzero $\Lambda$-elliptic meromorphic function $f$ with zero set $\operatorname{Zer}(f)$ and pole set $\operatorname{Pol}(f)$; also $Z:=\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$ and $P_0=P_{0}$.

[F1] $\Lambda=\mathbb Z+i\mathbb Z=\{m+ni:m,n\in\mathbb Z\}$ is a full complex lattice, since $i\notin\mathbb R$ gives real-linear independence; for all $z,w\in\mathbb C$ one has $|z+w|\le|z|+|w|$, $|zw|=|z|\,|w|$, and $|z|=0$ exactly for $z=0$ ([[def-complex-lattice-and-complex-torus]], [[lem-complex-conjugation-and-modulus-laws]]); $\mathbb C$ is the real coordinate plane, so its closed bounded subsets are compact and its compact subsets are bounded ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[thm-heine-borel-rn]]), and openness and continuity are the metric notions for $d(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

[F2] $\wp$ is holomorphic on $\mathbb C\setminus\Lambda$; at each lattice point it has a double pole with principal part $(z-\lambda)^{-2}$ and it has no other poles ([[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F3] Let $g$ be a nonconstant $\Lambda$-elliptic meromorphic function and let $P=\{c+s+ti:0\le s,t\le1\}$ be a translate whose boundary contains no zero and no pole of $g$. Then the numbers of zeros and of poles of $g$ in the interior of $P$, counted with multiplicity, are finite and equal, the sum of the residues of $g$ at its poles in the interior vanishes, and both numbers are independent of the translate among such $P$; a $\Lambda$-elliptic function with no poles is constant ([[thm-elliptic-function-divisor-laws]]).

[F4] A $\Lambda$-elliptic function is a meromorphic $f:\mathbb C\to\widehat{\mathbb C}$ with $f(z+\lambda)=f(z)$ for all $z,\lambda$, and a meromorphic function on $\mathbb C$ is one holomorphic on the complement of its pole set, every point of which is a pole ([[def-elliptic-function-for-a-lattice]]).

[F5] Let $g$ be meromorphic on a plane domain with pole set $P$. Then every point of the domain has a neighbourhood meeting $P$ in at most one point, and $P$ is closed in the domain ([[thm-poles-meromorphic-function-are-discrete-and-countable]]). If $g$ is not identically zero then $1/g$ is meromorphic, with pole set the zero set of $g$ ([[cor-meromorphic-functions-on-a-domain-form-a-field]]).

[F6] For every real $x$ there is exactly one integer $m$ with $m\le x<m+1$, its integer part ([[lem-integer-part]]).

## Verification

1.1 (The shifted parallelogram is boundary-free for $\wp$.) Every point of $\partial P_a$ with $a=(1+i)/4$ has the form $z=a+s+ti$ with $(s,t)\in\{0,1\}\times[0,1]\cup[0,1]\times\{0,1\}$, so $\operatorname{Re}z\in\{1/4,5/4\}$ or $\operatorname{Im}z\in\{1/4,5/4\}$. A lattice point of $\Lambda$ has integer real and imaginary parts, hence cannot have real part or imaginary part equal to $1/4$ or $5/4$; so $\partial P_a\cap\Lambda=\varnothing$. By [F2] the poles of $\wp$ are exactly the lattice points, so $\wp$ has no pole on $\partial P_a$. [F1, F2, algebra]

1.2 (The unshifted parallelogram meets the poles.) The four vertices of $P_0$ are $0,1,i,1+i$, all of which lie in $\Lambda$ and in $\partial P_0$; by [F2] each is a double pole of $\wp$. [F2, given]

1.3 (Finitely many divisor classes.) Suppose first that $f$ is nonconstant. By [F5] applied to $f$, the pole set $\operatorname{Pol}(f)$ is closed and every point of $\mathbb C$ has a neighbourhood meeting it in at most one point; by [F5] applied to $1/f$, whose pole set is $\operatorname{Zer}(f)$, the same holds for the zero set. Hence every point of $\mathbb C$ has a neighbourhood meeting $Z$ in at most two points, and since $P_0$ is compact by [F1] finitely many of these neighbourhoods cover $P_0$; therefore $Z\cap P_0=\{z_1,\dots,z_N\}$ is finite. By [F4] the function $f$ is $\Lambda$-periodic, so $Z$ is $\Lambda$-invariant; conversely every $z\in Z$ can be written $z=s+ti$ with real $s,t$, and subtracting the integer parts $m\le s<m+1$, $n\le t<n+1$ given by [F6] puts $z-(m+ni)\in Z\cap P_0$. Hence $Z=\bigcup_{j=1}^{N}(z_j+\Lambda)$: the zeros and poles of $f$ fall into the finitely many classes of $z_1,\dots,z_N$ modulo $\Lambda$. [F1, F4, F5, F6, given]

2.1 (Generic translates avoid the divisor.) Let $U$ be a nonempty open ball of basepoints; we show that some $b\in U$ has $\partial P_b\cap Z=\varnothing$, treating the constant case at the end. Fix the finite list of step 1.3 and put $B_j:=z_j-\partial P_0$ for $j=1,\dots,N$; each $B_j$ is closed, being a translate of $\partial P_0$, and contains no ball: if a ball $B(x,r)$ were contained in a segment with direction vector $q\ne0$, then with $u:=iq\ne0$ perpendicular to $q$ the two points $x$ and $x+\tfrac r{2|u|}u$ of the ball would both lie on the line of the segment, whose direction is $q$, forcing the nonzero vector $\tfrac r{2|u|}u$ to be a real multiple of $q$ and contradicting $u\perp q$. Consequently no ball is contained in $\partial P_0$ or in any of its translates, which are finite unions of segments: if the closed sets $F_1,\dots,F_m$ each contain no ball and a ball $B\subseteq F_1\cup\cdots\cup F_m$, then either $B\subseteq F_1$ or there is $y\in B\setminus F_1$, and since $F_1$ is closed some ball $B(y,\rho)\subseteq B\setminus F_1\subseteq F_2\cup\cdots\cup F_m$; iterating gives a ball inside some $F_i$, a contradiction. Hence each $B_j$ is closed with no ball inside it. For a basepoint $b\in U$ one has $\partial P_b\cap Z\ne\varnothing$ iff $b\in B_j+\lambda$ for some $j$ and some $\lambda\in\Lambda$: indeed $z\in\partial P_b\cap Z$ means $z=z_j+\lambda=b+w$ with $w\in\partial P_0$, that is $b=z_j+\lambda-w$. For $b\in U$ such a $\lambda$ must satisfy $|\lambda|\le|b-z_j|+|w|\le C$ for a constant $C$ depending only on $U$ and the finitely many $z_j$ by [F1], so only finitely many $\lambda\in\Lambda$ occur, and the set of bad basepoints in $U$ is the finite union $$\Bigl(\bigcup_{j=1}^{N}\ \bigcup_{\lambda\in\Lambda,\ |\lambda|\le C}(B_j+\lambda)\Bigr)\cap U$$ of closed sets containing no ball. A finite union of sets each containing no ball does not contain $U$: successively avoiding each closed member leaves a nonempty open subball, as in the induction just described. Hence there is $b\in U$ with $\partial P_b\cap Z=\varnothing$, which is the claim. If $f$ is a nonzero constant then $Z=\varnothing$ and every $b\in U$ works. [F1, F4, given, step 1.3, choose]

3.1 (The divisor law applies, and the explicit cases.) For a nonconstant $f$, step 2.1 provides a translate $P_b$ whose boundary avoids $\operatorname{Zer}(f)\cup\operatorname{Pol}(f)$, so the hypotheses of [F3] are met and the zero count, the pole count and the vanishing residue sum for $f$ hold for that parallelogram; for nonzero constant $f$ those counts are $0$ and the conclusions are trivial. Steps 1.1 and 1.2 are the explicit statements for $\wp$ on $\Lambda=\mathbb Z+i\mathbb Z$: the boundary of $P_{(1+i)/4}$ carries no pole, while the boundary of the unshifted $P_0$ contains the four lattice vertices. This proves the three clauses of the Example. [F2, F3, given, step 1.1, step 1.2, step 2.1] ∎

## Remarks

The point of the example is bookkeeping rather than computation: the divisor law
is stated only for translates whose boundary avoids the zeros and poles, and the
verification shows that such translates are never in short supply, because the
bad basepoints in any bounded ball form a finite union of translated parallelogram boundaries, none
of which contains a ball. The explicit translate $a=(1+i)/4$ moves the four
vertices of $P_0$ off its own boundary: $1+i$ becomes the interior point
$1+i\in P_a^\circ$, while $0$, $1$ and $i$ lie outside $P_a$, and the interior
of $P_a$ contains exactly one lattice point, namely $1+i$. The same argument
applies to any full lattice once one knows that a bounded set meets the lattice
in finitely many points, which is the uniform-gap estimate used in the
convergence proof for the $\wp$-series.
