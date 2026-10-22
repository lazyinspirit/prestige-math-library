---
id: lem-piccirillo-knot-lee-computations
kind: lemma
title: "Lee computations for the Conway knot and its Piccirillo partner"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-piccirillo-conway-pair
  - alg-khovanov-chain-complex-from-diagram
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - def-rasmussen-s-invariant
  - def-countable-choice
  - def-lee-deformed-khovanov-complex
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "§4, proof of Theorem 1.5 and Table 1, arXiv v1 PDF pp. 5–6; comparison data only"
    - title: "Lisa Piccirillo, The Conway knot is not slice, published Annals of Mathematics 191 (2020), 581–591"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v191-n2-p05-s.pdf"
      locator: "§3, printed p.587; the published incoming bidegree is correct"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "Lee deformation, the definition of $s$, and filtered spectral-sequence conventions"
    - title: "Kegel–Spreer, The search for exotic knot traces"
      url: "https://arxiv.org/html/2603.22438"
      locator: "§1.3 and Example 2.2; identifies $K_3$ as the Piccirillo friend of $K11n34$"
    - title: "Piccirillo-friends data repository"
      url: "https://github.com/LLewark/conway-knot-has-infinite-concordance-order"
      locator: "Piccirillo-friends CSV, $K11n34$ row; historical comparison only, not the input used below"
    - title: "Dirk Schuetz, KnotJob, author-distributed program and source"
      url: "https://www.maths.dur.ac.uk/users/dirk.schuetz/KnotJob.zip"
      locator: "Characteristic-zero unreduced Khovanov calculation on the direct Figure 1 and Figure 2 transcriptions; independent calculation, not imported knot-table values"
---

## Statement

Assume countable choice. Over $\mathbb Q$, the Rasmussen invariants of the
oriented Conway knot $C$ and its Piccirillo partner $K_P$ are
$$s(C)=0,\qquad s(K_P)=2.$$
The calculation is the finite Lee-filtered Khovanov calculation on the two
specified diagrams, including the rational Khovanov ranks and the surviving
Lee filtration levels needed to determine these values.

## Statement references

[Piccirillo, §4 and Table 1](https://arxiv.org/pdf/1808.02923)

[Rasmussen, *Khovanov homology and the slice genus*](https://arxiv.org/pdf/math/0402131v1)

[Kegel–Spreer, §1.3 and Example 2.2](https://arxiv.org/html/2603.22438)

[Piccirillo-friends data repository](https://github.com/LLewark/conway-knot-has-infinite-concordance-order)

## Facts & Assumptions

**Given:** Countable choice and the two oriented diagrams fixed in the Definition.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] [[def-piccirillo-conway-pair]] fixes the exact knots $C$ and $K_P$ by their diagrams.

[F2] [[alg-khovanov-chain-complex-from-diagram]] gives a finite cube complex from an explicit regular diagram, with its homological and quantum gradings.

[F3] [[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]] gives the Lee spectral sequence, its filtration changes, and the two orientation classes for a knot.

[F4] [[def-rasmussen-s-invariant]] defines $s(K)$ from the two Lee filtration levels as $s_{max}-1=s_{min}+1$.

[F5] A PD quadruple is listed counterclockwise starting from the incoming under-arc; equal arc labels are joined. This is only a finite encoding convention. The actual diagram match is proved by the transcription in the proof, without using the AC-dependent Seifert-matrix theorem.

[F6] The rational Lee operations are $m(1,1)=1$, $m(1,X)=m(X,1)=X$, $m(X,X)=1$, $\Delta(1)=1\otimes X+X\otimes1$, $\Delta(X)=X\otimes X+1\otimes1$, with circle degrees $\deg1=1$, $\deg X=-1$ and the stated normalized state shifts. [[def-lee-deformed-khovanov-complex]]

## Proof


1.1 Transcribe the left knot of Figure 1 in [F1], ignoring its red mutation circle. In the original $5323\times1843$ image its eleven crossing centers are approximately $(1540,216),(310,538),(1867,633),(1335,806),(877,840),(175,919),(884,1180),(375,871),(410,1527),(1890,1393),(1443,1230)$, in this order. Starting at the underpass of crossing $2$ toward crossing $8$, its complete cyclic visit word is $U2,O8,U7,U11,O10,O9,U6,O2,U5,O7,U9,O6,U8,O5,O4,U3,O1,U4,O11,U10,O3,U1$. Number outgoing arcs successively $0,\ldots,21$. Following these literal source strands with convention [F5] gives $[(20,15,21,16),(21,6,0,7),(14,19,15,20),(16,13,17,14),(7,12,8,13),(5,11,6,10),(1,9,2,8),(11,1,12,0),(9,5,10,4),(18,4,19,3),(2,18,3,17)]$. All eleven source underpass gaps are used, while the three extra breaks at the red mutation circle are simply joined. Use these eleven crossings in their listed order. The local PD quadruple is counterclockwise from the incoming under-arc. Its zero smoothing joins positions $(0,1),(2,3)$ and its one smoothing joins $(0,3),(1,2)$. With the oriented visit word there are six positive and five negative crossings, so the normalized cohomological and quantum shifts are $|v|-5$ and $|v|-4$. Reversing the single component changes neither crossing signs nor these shifts. This input is the selected Conway diagram, not a table entry or a polynomial-based identification. [F1, F2, F5, construct]

1.2 Here is the independent Figure 2 input. Expand its displayed $-2$ box as two negative full twists on the three strands: read left to right this is $(\sigma_1^{-1}\sigma_2^{-1})^6$, with the three incoming ends ordered top to bottom. Number the crossings outside the box by their centers in the source image $jprimeclean.png$ of size $2526\times2354$: $(1636,529),(1648,591),(1659,648),(1560,522),(1573,584),(1585,641),(1490,518),(1504,583),(1517,641),(809,1983),(891,2017),(768,870),(792,927),(593,572),(512,613),(437,651),(2201,1729),(2119,1727),(969,759),(1731,2321),(632,640),(550,685),(478,724),(1502,1614),(1569,1633),(1631,1651),(999,816),(1307,2178),(1266,2112),(1232,2058),(974,1659),(866,2163),(780,2120),(884,2078),(800,2041),(648,2313),(687,922),(625,964),(718,975),(644,1023),(1296,2026),(1331,2083),(1369,2145)$. Number the box crossings $44,\ldots,55$ in the indicated braid order. Continue each strand through every source gap beneath the unbroken overpassing strands; some of those gaps contain a bundle of two or three crossings. Following the resulting single circle gives the following counterclockwise, incoming-under PD, with outgoing segment labels $0,\ldots,109$: $[(109,35,0,34),(0,13,1,14),(1,51,2,50),(64,35,65,36),(63,13,64,12),(62,51,63,52),(89,37,90,36),(90,11,91,12),(91,53,92,52),(96,44,97,43),(95,20,96,21),(78,10,79,9),(77,54,78,55),(37,81,38,80),(38,73,39,74),(39,101,40,100),(33,15,34,14),(32,49,33,50),(10,28,11,27),(15,49,16,48),(26,79,27,80),(25,75,26,74),(24,99,25,100),(29,93,30,92),(30,61,31,62),(31,3,32,2),(53,28,54,29),(47,5,48,4),(46,59,47,60),(45,95,46,94),(44,20,45,19),(5,22,6,23),(6,42,7,41),(58,22,59,21),(57,42,58,43),(23,41,24,40),(8,76,9,75),(7,98,8,99),(55,76,56,77),(56,98,57,97),(18,93,19,94),(17,61,18,60),(16,3,17,4),(101,73,102,72),(102,81,103,82),(71,83,72,82),(70,104,71,103),(83,104,84,105),(84,70,85,69),(105,69,106,68),(106,85,107,86),(67,87,68,86),(66,108,67,107),(87,108,88,109),(88,66,89,65)]$. This lists all forty-three crossings outside the box and twelve inside it, with no omitted crossing. In particular the source figure is transcribed directly; the different fifty-six-crossing friend code in the comparison repository is not used. The oriented crossing counts are $n_+=32,n_-=23$, so the shifts are $|v|-23$ and $|v|-14$. [F1, F2, construct]

2.1 Form the finite rational cube [F2] on these two exact inputs. A reproducible rank calculation enumerates the smoothing circles as equivalence classes of arc labels under the two local pairings in step 1.1, orders the circles by their least arc, and labels a tensor by the bit string whose $1$ bits carry $X$. On an edge changing crossing $j$, use the sign $(-1)^{\sum_{i<j}v_i}$ and the merge or split map. For Khovanov cohomology set $m(X,X)=0$ and omit the $1\otimes1$ term of $\Delta(X)$; for Lee use all terms in [F6]. In each quantum degree, exact rational Gaussian elimination gives $\dim Kh^{h,q}=\dim C^{h,q}-\operatorname{rank}d^{h,q}-\operatorname{rank}d^{h-1,q}$. The complete resulting rational rank polynomials, grouped by $h$, are the two tables below. They were computed independently on these PDs by the characteristic-one command `-ku1` in KnotJob, where `1` denotes rational coefficients, not a finite field. Its arithmetic stores reduced integer numerator/denominator pairs; zero tests and inversions are exact. Tensoring a crossing at a time and cancelling invertible differentials is an efficient realization of the same finite Gaussian calculation: for a pivot $u:C_a\to C_b$, deleting $a,b$ and replacing a remaining coefficient by $d_{cd}-d_{cb}u^{-1}d_{ad}$ splits off the contractible two-term summand. The elementary basis changes proving this identity are invertible over $\mathbb Q$, so the operation preserves the computed cohomology. The Conway rank polynomial was also independently recomputed with the integral cube implementation `cppkh`; its free ranks give exactly the same rational table. Thus neither table is a quoted invariant value from the literature. [F2, F6, step 1.1, step 1.2, construct, algebra]

3.1 For the only additional Conway Lee calculation needed, retain homological degrees $-2,-1,0,1,2$ of its direct cube, with the operations [F6]. This truncation preserves degrees $-1,0,1$ and their induced first spectral-sequence differential: their kernels and images involve exactly these adjacent chain degrees. It has $18,246$ enhanced-state basis elements and $119,684$ initial nonzero differential entries. Direct multiplication checks $d^2=0$, and every entry raises quantum degree by $0$ or $4$. Cancel degree-zero invertible arrows by the Schur rule of step 2.1, using the increasing initial basis-index order for the queue, and append every newly created degree-zero arrow to its end. Each such cancellation is filtered, since the paired basis vectors have equal quantum degree. There are $8,038$ cancellations. In homological degrees $-1,0,1$ the remaining generators are precisely $q^{-3}+q^{-1}+2q$, $2q^{-1}+3q+q^3$, and $q+2q^3+q^5$, as independently verified by the rational table. The transferred degree-four differential from the one-dimensional group $Kh^{-1,-1}(C)$ to the one-dimensional group $Kh^{0,3}(C)$ is the matrix $(2/3)$. This exact entry results from the above rational Schur updates; the standard-library calculation in the accompanying family source `conway-lee-computation.py` specifies every state, sign, entry and cancellation and asserts the matrix identity. In particular this is a nonzero differential into quantum degree $3$, so that class does not survive. [F2, F3, F6, step 1.1, step 2.1, construct, algebra]

3.2 In the partner table, $Kh^{0,*}=\mathbb Q_{-1}\oplus\mathbb Q_1^2\oplus\mathbb Q_3$, $Kh^{-1,*}=\mathbb Q_1^2$, and $Kh^{1,*}=\mathbb Q_1^2\oplus\mathbb Q_3^3\oplus\mathbb Q_5$. The degree-three class cannot support or receive any Lee differential: the possible outgoing bidegrees are $(1,3+4k)$ and incoming bidegrees $(-1,3-4k)$ for integers $k\ge1$, and all of these groups are zero by the table. The multiple-of-four restriction follows from [F6] and the quantum congruence decomposition; a finite filtration makes these all possible pages. Thus the degree-three class survives. The two limiting levels lie in $\{-1,1,3\}$, differ by two and include $3$, so they are exactly $(1,3)$. Therefore [F4] gives $s(K_P)=2$. Notice that the incoming test is $3-4k$, not $-3-4k$; the latter expression occurs in the 2018 arXiv preprint, while the published 2020 proof gives the correct incoming bidegree. The independent characteristic-zero `-s0` calculation also returns $2$ on this exact input. [F3, F4, F6, step 1.2, step 2.1, algebra]

4.1 The complete Conway $h=0$ row has quantum degrees only $-1,1,3$. By step 3.1 the last is removed on the first possible nonzero Lee differential. Every later page is a subquotient of the corresponding previous bidegree, so no new degree can appear. The two nonzero limiting quantum levels are therefore $-1,1$: by [F3] they occur in two different congruence classes modulo four and differ by two, and Lee homology has dimension two. Hence [F4] gives $s(C)=0$. As an independent arithmetic check, the unmodified rational `s` calculation in knotkit and the characteristic-zero `-s0` calculation in KnotJob both return $0$ on the same diagram; these outputs are not needed in place of the explicit nonzero differential. [F3, F4, step 2.1, step 3.1, algebra]

5.1 Steps 4.1 and 3.2 give the asserted rational Lee filtration levels $(-1,1)$ and $(1,3)$ on the two diagrams specified in [F1]. The tables in step 2.1 provide the full rational Khovanov ranks used in this calculation, while step 3.1 supplies the additional actual Lee differential required for Conway. The bounded spectral sequence in [F3] has no further page capable of changing either conclusion. Together these prove every part of the Statement. [A1, F1, F2, F3, F4, step 2.1, step 4.1, step 3.2, algebra, construct] ∎

## Computed rational rank tables

In each table the entry in row $h$ is $\sum_j\dim_{\mathbb Q}Kh^{h,j}q^j$; all unlisted homological rows vanish. The tables are the independently computed results of the explicit finite calculation in step 2.1.

Conway $C$.

| $h$ | Rational rank polynomial |
| ---: | :--- |
| $-5$ | $q^{-9}$ |
| $-4$ | $q^{-7}+q^{-5}$ |
| $-3$ | $q^{-5}+q^{-3}$ |
| $-2$ | $2q^{-3}+q^{-1}$ |
| $-1$ | $q^{-3}+q^{-1}+2q$ |
| $0$ | $2q^{-1}+3q+q^{3}$ |
| $1$ | $q+2q^{3}+q^{5}$ |
| $2$ | $2q^{3}+q^{5}+q^{7}$ |
| $3$ | $q^{5}+2q^{7}$ |
| $4$ | $q^{7}+q^{9}$ |
| $5$ | $q^{9}+q^{11}$ |
| $6$ | $q^{13}$ |

Partner $K_P$.

| $h$ | Rational rank polynomial |
| ---: | :--- |
| $-3$ | $q^{-5}$ |
| $-2$ | $2q^{-3}+q^{-1}$ |
| $-1$ | $2q$ |
| $0$ | $q^{-1}+2q+q^{3}$ |
| $1$ | $2q+3q^{3}+q^{5}$ |
| $2$ | $3q^{3}+3q^{5}+2q^{7}$ |
| $3$ | $3q^{5}+3q^{7}+q^{9}$ |
| $4$ | $2q^{5}+3q^{7}+3q^{9}$ |
| $5$ | $3q^{7}+5q^{9}+3q^{11}$ |
| $6$ | $3q^{9}+5q^{11}+3q^{13}$ |
| $7$ | $q^{9}+4q^{11}+4q^{13}+2q^{15}$ |
| $8$ | $2q^{11}+5q^{13}+4q^{15}+q^{17}$ |
| $9$ | $4q^{13}+5q^{15}+4q^{17}$ |
| $10$ | $q^{13}+3q^{15}+6q^{17}+3q^{19}$ |
| $11$ | $2q^{15}+4q^{17}+4q^{19}+2q^{21}$ |
| $12$ | $q^{15}+2q^{17}+6q^{19}+3q^{21}+q^{23}$ |
| $13$ | $q^{17}+4q^{19}+4q^{21}+4q^{23}$ |
| $14$ | $q^{19}+4q^{21}+4q^{23}+2q^{25}$ |
| $15$ | $q^{19}+3q^{21}+3q^{23}+3q^{25}+q^{27}$ |
| $16$ | $q^{21}+4q^{23}+5q^{25}+2q^{27}$ |
| $17$ | $2q^{23}+3q^{25}+4q^{27}+2q^{29}$ |
| $18$ | $2q^{25}+4q^{27}+2q^{29}+q^{31}$ |
| $19$ | $q^{25}+2q^{27}+4q^{29}+2q^{31}$ |
| $20$ | $q^{27}+4q^{29}+3q^{31}+2q^{33}$ |
| $21$ | $q^{29}+2q^{31}+3q^{33}+q^{35}$ |
| $22$ | $2q^{31}+2q^{33}+q^{35}$ |
| $23$ | $q^{31}+q^{33}+3q^{35}+q^{37}$ |
| $24$ | $q^{33}+2q^{35}+q^{37}+q^{39}$ |
| $25$ | $q^{35}+2q^{37}+q^{39}$ |
| $26$ | $q^{35}+q^{37}+q^{39}+q^{41}$ |
| $27$ | $2q^{39}+q^{41}$ |
| $28$ | $q^{39}+q^{41}+q^{43}$ |
| $29$ | $q^{41}+q^{43}+q^{45}$ |
| $30$ | $q^{45}$ |
| $31$ | $q^{45}$ |
| $32$ | $q^{49}$ |
