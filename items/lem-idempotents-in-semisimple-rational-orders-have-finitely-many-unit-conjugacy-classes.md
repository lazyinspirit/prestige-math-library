---
dependency_level: 0
id: lem-idempotents-in-semisimple-rational-orders-have-finitely-many-unit-conjugacy-classes
kind: lemma
title: Idempotents in semisimple rational orders have finitely many unit-conjugacy
  classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-wedderburn-artin-theorem
- thm-minkowski-second-theorem-on-successive-minima
- lem-full-lattice-fundamental-domain-and-bounded-points
- def-successive-minima-of-a-convex-body-with-respect-to-a-lattice
- def-full-euclidean-lattice-and-covolume
- cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
- thm-lagrange
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Abelian Varieties v2.00 (2008), I Proposition15.4
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Printed65; statement used, with a complete local successive-minima/order-lattice
      proof in place of the external arithmetic-group reduction citation.
verification:
  precheck: pending
axiom_use: AC retained from the actual Minkowski second theorem and full-lattice contexts.
  Other selections occur in fixed finite dimensions.
---

## Statement

Assume AC. Let $E$ be a finite-dimensional semisimple $\mathbb Q$-algebra and let $R\subseteq E$ be a unital $\mathbb Z$-subring that is free of finite rank and spans $E$ over $\mathbb Q$. Then the idempotents of $R$ form finitely many conjugacy classes under $R^\times$. The zero algebra and its zero order are included.

## Statement references

[Milne, *Abelian Varieties*, v2.00, I Proposition15.4, printed p.65](https://www.jmilne.org/math/CourseNotes/AV.pdf). The proof below reconstructs the required lattice finiteness from the local Minkowski second theorem; it does not import Jordan–Zassenhaus or Borel–Harish-Chandra.

## Facts & Assumptions

**Given:** AC, $E,R$ in the Statement. A full $R$-lattice in a finite-dimensional left $E$-module $V$ means an $R$-stable finite-rank free $\mathbb Z$-subgroup spanning $V$ over $\mathbb Q$.

[A1] AC is explicit ([[def-axiom-of-choice]]) and meets the actual measure and lattice suppliers below.

[F1] A nonzero semisimple ring is a finite product of matrix rings over division rings; in a finite-dimensional $\mathbb Q$-algebra those division rings are finite dimensional over $\mathbb Q$ ([[thm-wedderburn-artin-theorem]]). The displayed ring isomorphisms respect central rational scalars, since a unital ring isomorphism respects integers and their inverses.

[F2] For a full lattice $M$ in $\mathbb R^t$, $t\ge1$, and the Euclidean unit ball $B_t$, its ordinary real successive minima $\mu_1\le\cdots\le\mu_t$ satisfy
$$ \Bigl(\prod_j\mu_j\Bigr)\operatorname{vol}(B_t)\le2^t\operatorname{covol}(M). $$
This is the UPPER product inequality in the actual local [[thm-minkowski-second-theorem-on-successive-minima]], under AC. The definitions are [[def-successive-minima-of-a-convex-body-with-respect-to-a-lattice]] and [[def-full-euclidean-lattice-and-covolume]].

[F3] Bounded sets meet a full Euclidean lattice in finitely many points ([[lem-full-lattice-fundamental-domain-and-bounded-points]]). A full-rank integral sublattice has finite index equal to the absolute determinant of its basis matrix ([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]); this also supplies a basis for a full-rank subgroup of $\mathbb Z^t$. Consequently inclusion of two full real lattices has index equal to their covolume ratio.

[F4] A finite group is killed by its order in the additive abelian case ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 If $E=0$ then $R=0$ and the sole idempotent is $0$. Assume $E\ne0$. We first prove an auxiliary lattice assertion for a division algebra $D$ finite dimensional over $\mathbb Q$, a full order $O\subset D$, and the left $D$-space $V=D^r$. If $r=0$, its only full lattice is $0$. For $r\ge1$, write $d=\dim_{\mathbb Q}D$ and $t=dr$. Fix a $\mathbb Z$-basis $a_1,\ldots,a_d$ of $O$ and a Euclidean norm on $V_{\mathbb R}=V\otimes_{\mathbb Q}\mathbb R$. Left multiplication by each nonzero $a_j$ is an invertible real linear map, so its operator norm is a positive finite constant $c_j$. These constants depend only on $O,r$ and the fixed norm. [A1, given, construct]

1.2 By [F1], write $E=\prod_i M_{s_i}(D_i)$ with finite-dimensional division $\mathbb Q$-algebras $D_i$. Each has a full order WITHOUT a maximal-order existence theorem: take a rational basis containing $1$, let $L_i$ be its integral span, and clear the finitely many multiplication structure constants by an integer $b_i>0$ so that $b_iL_iL_i\subset L_i$. Then $O_i=\mathbb Z\cdot1+b_iL_i$ is a subring, since $$ (a+b_ix)(a'+b_iy)=aa'+b_i(ay+a'x+b_ixy). $$ It contains $b_iL_i$ and is contained in $L_i$, so it is a full lattice with a $\mathbb Z$-basis by [F3]. Set $\Lambda=\prod_i M_{s_i}(O_i)$, a full order in $E$. No containment of $R$ in $\Lambda$ is asserted. [F1, F3, given, construct, algebra]

2.1 For any full $O$-lattice $M\subset V$, choose $v_1\in M\setminus\{0\}$ of least norm. Inductively choose $v_i$ of least norm outside the left $D$-span of the preceding vectors. The set is nonempty since $M$ spans $V$ over $\mathbb Q$. A least norm exists: choose one candidate, then minimize in the finite intersection with its closed ball by [F3]. The resulting $D$-basis has nondecreasing positive lengths $\rho_i=\lVert v_i\rVert$. Set $N=\sum_i Ov_i\subset M$. The vectors $a_jv_i$ are a $\mathbb Z$-basis of $N$, by $D$-independence of the $v_i$ and $\mathbb Q$-independence of the $a_j$; they also span $V$ rationally. Thus $N$ is a full lattice, free on the $v_i$ over $O$. Gram–Schmidt bounds the absolute determinant by the product of column lengths, so $$ \operatorname{covol}(N)\le\Bigl(\prod_j c_j\Bigr)^r\prod_i\rho_i^d. $$ Indeed each orthogonalized column has length at most its original column, their product is the absolute determinant, and $\lVert a_jv_i\rVert\le c_j\rho_i$. [F3, step 1.1, choose, construct, algebra]

3.1 Let $\mu_1\le\cdots\le\mu_t$ be the ordinary REAL successive minima of $M$ for the Euclidean ball. EVERY lattice vector of norm strictly less than $\rho_i$ lies in the previous $D$-span, by the greedy choice. That span has REAL dimension $d(i-1)$: the rational $D$-basis map extends to a real isomorphism even when $D\otimes\mathbb R$ is not a division algebra. For every radius $u<\rho_i$, its lattice vectors therefore span at most $d(i-1)$ real dimensions. By the infimum definition of successive minima, $$ \mu_{d(i-1)+1}\ge\rho_i,\qquad \prod_{j=1}^t\mu_j\ge\prod_{i=1}^r\rho_i^d. $$ The latter inequality groups the nondecreasing minima into consecutive blocks of $d$. This argument makes no assertion about an unattained endpoint. [F2, step 2.1, algebra]

4.1 Apply [F2] to $M$ and the ball to get $$ \operatorname{covol}(M)\ge\frac{\operatorname{vol}(B_t)}{2^t}\prod_j\mu_j\ge\frac{\operatorname{vol}(B_t)}{2^t}\prod_i\rho_i^d. $$ The ball has positive finite volume, since it contains a positive-volume cube and is contained in a bounded cube. Together with step 2.1 and the index identity [F3], this gives the UNIFORM bound $$ [M:N]\le\frac{2^t}{\operatorname{vol}(B_t)}\Bigl(\prod_jc_j\Bigr)^r=:B(O,r). $$ No norm of an element of a division algebra, no noncommutative determinant and no Rosati positivity are used. [A1, F2, F3, step 2.1, step 3.1, algebra]

5.1 Choose an integer $J\ge\max\{1,B(O,r)\}$ and put $q=J!$. The finite abelian group $M/N$ has order at most $J$, so [F4] gives $qM\subset N$. The $D$-linear isomorphism taking $v_i$ to the standard basis sends $N$ to $O^r$, and sends $M$ to an $O$-stable lattice between $O^r$ and $q^{-1}O^r$. The quotient $q^{-1}O^r/O^r$ is finite, of order $q^t$, and has finitely many subgroups. Thus full $O$-lattices in the fixed $D^r$ have finitely many $O$-isomorphism classes. Rank $r=1$ is covered by the same bound; rank $0$ was handled in step 1.1. [F4, step 1.1, step 2.1, step 4.1, choose, algebra]

6.1 Fix a finite-dimensional left $E$-module $V$ and a full $\Lambda$-lattice $M$. Central idempotents split $V$ and $M$ into matrix factors. In a factor $M_s(D)$, the integral matrix units $e_{ab}$ belong to $\Lambda$, so $M=\bigoplus_a e_{aa}M$, and $e_{a1}$ identifies $e_{11}M$ with $e_{aa}M$, with inverse $e_{1a}$. The lattice $e_{11}M$ is an $O$-lattice in the FIXED left $D$-space $e_{11}V\cong D^r$. Conversely its copies and these matrix-unit formulas reconstruct the full lattice with its matrix-order action. An $O$-linear lattice isomorphism extends rationally to a $D$-linear one, since $O$ spans $D$, and these formulas extend it to a matrix-order-linear isomorphism. step 5.1 gives finitely many possibilities, including $r=0$; the finite product over the factors proves finiteness of $\Lambda$-lattice classes in fixed $V$. [step 5.1, step 1.2, construct, algebra]

7.1 Clear finitely many rational coordinates in a basis of $R$ to choose $c\ge1$ with $c\Lambda\subset R$. If $M\subset V$ is only $R$-stable, let $M'=\Lambda M$, generated additively by all products. It is a full $\Lambda$-lattice: the finitely many products of fixed $\mathbb Z$-bases of $\Lambda$ and $M$ generate it, their rational coordinates have a common denominator, and hence $M'$ lies in a rational multiple of $M$, contains $M$, and is free of full rank by [F3]. We have $cM'\subset M\subset M'$, since $c\Lambda\subset R$ and $M$ is $R$-stable. For a $\Lambda$-linear isomorphism $M'\to N$ with one of the finite representative lattices in step 6.1, its rational extension is $E$-linear because $\Lambda$ spans $E$. Thus it transports $M$ to an $R$-stable subgroup between $cN$ and $N$, EVEN THOUGH $R\subset\Lambda$ was not assumed. There are finitely many such subgroups because $N/cN$ is finite. Therefore full $R$-lattices in a fixed rational $E$-module have finitely many $R$-isomorphism classes. [F3, step 1.2, step 6.1, choose, construct, algebra]

8.1 Apply step 7.1 to RIGHT $R$-modules by using the opposite algebra and order. If $e^2=e$ in $R$, the right ideals $eR$ and $(1-e)R$ are full lattices in $eE$ and $(1-e)E$, and $R_R=eR\oplus(1-e)R$. There are finitely many rational types of these pairs: in a block $M_s(D)$, the idempotent on the right $D$-space $D^s$ has $D^s=\operatorname{im}(e)\oplus\ker(e)$, so bases of these two spaces conjugate it to $\operatorname{diag}(I_r,0)$, with $0\le r\le s$. Left multiplication by that change of basis identifies the right ideals and their complements with the standard pair. Thus a tuple of finitely many ranks in finite ranges fixes their rational types. step 7.1 leaves finitely many integral isomorphism classes for each lattice of each pair. [F1, F3, step 1.2, step 7.1, construct, algebra]

9.1 If two idempotents $e,f$ have isomorphic pairs $(eR,(1-e)R)$ and $(fR,(1-f)R)$, combine isomorphisms on the two summands to get a right $R$-linear automorphism of $R_R$ conjugating the $e$-projection to the $f$-projection. Any right $R$-linear endomorphism of $R_R$ is left multiplication by its value at $1$; its inverse likewise shows that value is a unit $u\in R^\times$. Hence $f=ueu^{-1}$. The finitely many pairs in step 8.1 therefore give finitely many unit-conjugacy classes of idempotents. [step 8.1, construct, algebra]

10.1 The zero algebra was handled in step 1.1. The idempotents $0,1$ correspond to zero/full image ranks in step 8.1; zero module factors in the auxiliary lattice assertion were handled without invoking Minkowski in dimension zero. The cases $J=1$, $q=1$ and $c=1$ simply make the relevant finite quotients trivial. AC [A1] supplies exactly the existing Minkowski/real-lattice contexts; all additional basis and shortest-vector choices are finite at each fixed dimension. This proves the Statement. [A1, step 1.1, step 5.1, step 7.1, step 8.1, step 9.1, algebra] ∎
