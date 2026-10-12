---
id: lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion
kind: lemma
domain: mathematics
title: "Fixed-particle-number occupation bases and the countable-mode partition
  criterion"
status: draft
origin: pipeline
dependency_level: 4
deps:
  [
    lem-finite-rank-operators-are-compact,
    thm-norm-limit-of-compact-operators-is-compact,
    thm-cauchy-schwarz-in-an-inner-product-space,
    def-countable-choice,
    def-hilbert-space,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-permutation-sector-projections,
    thm-nrqm-identical-particles-occupation-number-basis,
    thm-parseval-equivalences-for-a-complete-orthonormal-family,
    def-adjoint-of-a-densely-defined-unbounded-operator,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-projection-valued-measure,
    thm-bounded-borel-pvm-integral,
    lem-nuclear-series-characterizes-trace-norm,
    thm-trace-is-absolutely-convergent-and-basis-independent,
    def-unbounded-integral-against-a-pvm,
    lem-unbounded-pvm-integral-is-well-defined-and-closed
  ]
dependency_roles:
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory, Chapter 1: finite occupation
        configurations; the countable fixed-N extension and trace bounds are
        proved locally here"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space with a supplied countably infinite orthonormal basis $(e_j)_{j\ge1}$, let $N\ge1$ be an integer, and let $\varepsilon_j\in\mathbb R$ with $\varepsilon_j\ge b$ for a fixed $b\in\mathbb R$. Use the completed tensor power and permutation-sector projections of [[lem-nrqm-composites-hilbert-tensor-construction]] and [[lem-nrqm-composites-permutation-sector-projections]], and write $\mathfrak H_N^\sigma:=\operatorname{ran}P_\sigma^{(N)}$ for $\sigma\in\{+,-\}$. Then:

(a) For every finitely supported sequence $n=(n_j)_{j\ge1}$ of nonnegative integers with $\sum_jn_j=N$, put $\operatorname{orb}(n):=\{(i_1,\ldots,i_N):\#\{k:i_k=j\}=n_j\text{ for every }j\}$ and
$$b_n^+:=|\operatorname{orb}(n)|^{-1/2}\sum_{i\in\operatorname{orb}(n)}e_{i_1}\otimes\cdots\otimes e_{i_N}.$$
For every $N$-element subset $J=\{j_1<\cdots<j_N\}$ of the positive integers, put
$$b_J^-:=\frac1{\sqrt{N!}}\sum_{\pi\in S_N}\operatorname{sgn}(\pi)e_{j_{\pi(1)}}\otimes\cdots\otimes e_{j_{\pi(N)}}.$$
These are orthonormal bases of the symmetric and antisymmetric sectors respectively. Denote their countable index sets by $\mathcal C_N^+$ and $\mathcal C_N^-$, and write $b_c^\sigma$ for the corresponding vector. Define $E_n:=\sum_jn_j\varepsilon_j$ and $E_J:=\sum_{j\in J}\varepsilon_j$.

(b) The fixed-$N$ free energy operator is the self-adjoint diagonal operator
$$D(H_N^\sigma):=\left\{\psi=\sum_{c\in\mathcal C_N^\sigma}a_cb_c^\sigma:\sum_c|E_c|^2|a_c|^2<\infty\right\},\qquad H_N^\sigma\psi:=\sum_cE_ca_cb_c^\sigma.$$
It is bounded below by $Nb$, and is the closure of its action on finite occupation sums. On elementary tensors of modes it agrees with the restriction of the labelled energy sum $\sum_{k=1}^N\varepsilon_{i_k}$, with the same diagonal-domain closure. Its spectral PVM is
$$E_N^\sigma(B)\psi=\sum_c\mathbf1_B(E_c)a_cb_c^\sigma.$$

(c) For $\beta>0$, let $q_j:=e^{-\beta\varepsilon_j}>0$, so $q_j\le e^{-\beta b}$. Define the extended positive trace of a bounded positive operator as its nonnegative diagonal sum in the supplied occupation basis; its independence of any other supplied orthonormal basis is proved below. With this trace (allowed to be $+\infty$),
$$Z_N^+(\beta):=\operatorname{Tr}e^{-\beta H_N^+}=h_N(q):=\sum_{1\le i_1\le\cdots\le i_N}q_{i_1}\cdots q_{i_N},$$
$$Z_N^-(\beta):=\operatorname{Tr}e^{-\beta H_N^-}=e_N(q):=\sum_{1\le i_1<\cdots<i_N}q_{i_1}\cdots q_{i_N}.$$
All sums are nonnegative-series sums. For either sign,
$$\left(\prod_{k=1}^{N-1}q_k\right)\sum_{j=N}^\infty q_j\le Z_N^\sigma(\beta)\le\left(\sum_{j=1}^\infty q_j\right)^N.$$
For $N=1$ the product is $1$, the tail starts at $1$, and both partition sums equal $\sum_jq_j$. Consequently, for every fixed $N\ge1$ and either statistics,
$$0<Z_N^\sigma(\beta)<\infty\quad\Longleftrightarrow\quad\sum_j e^{-\beta\varepsilon_j}<\infty.$$
The bounded positive operator $e^{-\beta H_N^\sigma}$ is trace class exactly in this case, and its ordinary trace then equals the displayed occupation sum. This is a fixed-$N$ criterion, not a trace over all particle numbers.

## Facts & Assumptions

**Given:** Countable Choice, the supplied basis, $N\ge1$, the lower bound $b$, real energies $\varepsilon_j\ge b$, and $\beta>0$ in clause (c).

[F1] Completed tensor products have dense algebraic tensor products and the elementary-tensor inner-product formula; the permutation projections are bounded orthogonal projections acting by finite permutation sums ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]]).

[F2] In each finite prefix $H_m:=\operatorname{span}\{e_1,\ldots,e_m\}$ the Slater vectors indexed by $N$-element subsets form an orthonormal antisymmetric basis, and the orbit sums are a nonzero orthogonal symmetric basis ([[thm-nrqm-identical-particles-occupation-number-basis]] (a)-(c)).

[F3] Cauchy-Schwarz controls square-summable coefficient pairings ([[thm-cauchy-schwarz-in-an-inner-product-space]]). A complete orthonormal family gives Parseval and norm-convergent coordinate expansion ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]). The adjoint of a densely defined operator is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$, and equality with the adjoint means self-adjointness ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F4] A PVM is strongly countably additive; integration of bounded Borel functions gives the corresponding bounded operator and its scalar spectral integrals ([[def-projection-valued-measure]], [[thm-bounded-borel-pvm-integral]]). The unbounded identity integral has the scalar squared-moment domain and is obtained by bounded coordinate truncations ([[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[F5] Finite-rank operators are compact and their operator-norm limits are compact ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]]). An absolutely summable nuclear series defines a trace-class operator, with trace equal to the sum of its rank-one traces; a trace-class operator has an absolutely summable diagonal in every supplied orthonormal basis ([[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Proof

**Proof technique:** direct; exhaust the supplied basis by finite prefixes, compute the unbounded diagonal adjoint on coordinates, and compare nonnegative fixed-N occupation sums.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Product basis and finite-prefix exhaustion] The tensors $e_{i_1}\otimes\cdots\otimes e_{i_N}$ are orthonormal by [F1]. Their span is dense: approximate each factor of an elementary tensor by its finite basis truncation using [F3]; the tensor norm formula and the telescoping difference of two products show convergence of these approximations, and finite sums of elementary tensors are dense by [F1]. Every finite collection of words is contained in some $H_m^{\otimes N}$. Since each $P_\sigma^{(N)}$ is bounded, its images of this dense word span are dense in its range. In the finite prefix, these images span precisely the finite Slater or orbit-sum basis of [F2]. A word in $\operatorname{orb}(n)$ uses only finitely many modes, and the orbit consists of distinct orthonormal product vectors, so its sum has norm squared $|\operatorname{orb}(n)|>0$. Thus its displayed normalization agrees in every larger prefix. The finite-prefix Slater vectors likewise agree in every larger prefix. Any pair of proposed occupation vectors lies in a common prefix, where [F2] gives orthogonality; the normalized vectors have norm one. Their span is dense in the sector by the projection argument, proving (a). The index sets are countable because they are countable unions of finite prefix index sets. [F1, F2, F3, algebra, construct]

2.1 [Diagonal domain and self-adjointness] Write either sector in the orthonormal coordinates of step 1.1. The specified domain contains every finite coordinate vector, hence is dense. For a vector in that domain, Parseval makes the defining energy series converge. If $y$ belongs to the adjoint domain, with adjoint value $z$, testing against each $b_c^\sigma$ gives $z_c=E_cy_c$ because $E_c$ is real. Since $z$ is square summable, $\sum_c|E_cy_c|^2<\infty$, so $y$ belongs to the specified domain. Conversely, if that sum is finite, Cauchy-Schwarz applied to the square-summable coefficient families gives $\langle H_N^\sigma x,y\rangle=\langle x,H_N^\sigma y\rangle$ for every domain vector $x$, so $y$ belongs to the adjoint domain with the stated value. The domains and values agree, proving self-adjointness by [F3]. Since every $E_c\ge Nb$, the absolutely convergent energy quadratic sum is at least $Nb\|x\|^2$. Finite coordinate truncations converge in both norm and graph norm since both square-sum tails vanish, so finite occupation sums are a core and the operator is their diagonal closure. [F3, step 1.1, algebra]

3.1 [Labelled energy and spectral measure] The same coordinate-domain construction on the product-word basis defines a self-adjoint labelled operator with energies $\sum_k\varepsilon_{i_k}$, agreeing with the free slot-energy sum on finite mode words. Every permutation of a word has the same energy, so its domain and action commute with each permutation unitary and the projections [F1]. Their sector restrictions have exactly the occupation energies and domain of step 2.1. For the displayed $E_N^\sigma(B)$, the projection and intersection identities follow coordinatewise; for disjoint $B_l$, the tails of the square-summable coordinates give strong countable additivity and total mass $I$, so it is a PVM. The scalar measure of a vector $\psi=\sum_ca_cb_c^\sigma$ is $\sum_c|a_c|^2\delta_{E_c}$, so [F4] gives the identity-integral domain exactly $\sum_cE_c^2|a_c|^2<\infty$; bounded spectral truncations converge to the displayed coordinate action there. This PVM is also uniquely determined by that operator: if another PVM represents it, the zero norm of $(H_N^\sigma-E_c)b_c^\sigma$ forces its scalar measure at $b_c^\sigma$ to be supported at $E_c$. Its projections therefore act as $\mathbf1_B(E_c)$ on every $b_c^\sigma$, and density gives equality on the whole sector. For the exponential, use the bounded Borel function $g(a)=e^{-\beta\max\{a,Nb\}}$ on $\mathbb R$; it agrees with $e^{-\beta a}$ on the support of this PVM. [F4] therefore gives the bounded positive operator with eigenvalues $e^{-\beta E_c}\le e^{-\beta Nb}$, namely $e^{-\beta H_N^\sigma}$. This proves (b) and identifies the exponential used in (c). [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 [Extended trace and occupation sums] Put $r_c:=e^{-\beta E_c}$, a bounded positive family. In the supplied occupation basis the extended positive trace is $\sum_cr_c$. This value is basis independent even when infinite: if $(v_l)$ is any other orthonormal basis, then $\sum_l\langle e^{-\beta H_N^\sigma}v_l,v_l\rangle=\sum_l\sum_cr_c|\langle v_l,b_c^\sigma\rangle|^2=\sum_cr_c$, since nonnegative-series sums can be interchanged as suprema over finite subsums, and Parseval gives $\sum_l|\langle v_l,b_c^\sigma\rangle|^2=1$. A Bose occupation sequence has a unique sorted word $i_1\le\cdots\le i_N$, and a Fermi subset has a unique increasing word; $e^{-\beta E_c}$ is the product of the corresponding $q_j$. Thus the trace equals $h_N(q)$ or $e_N(q)$ as stated. If the sum is finite, the series of rank-one operators $\sum_cr_c\langle\cdot,b_c^\sigma\rangle b_c^\sigma$ is nuclear and converges in operator norm to the exponential: its norm tail is at most the summable scalar tail. Its finite-rank partial sums and [F5] first give compactness, and the nuclear criterion then gives trace class and the ordinary trace formula. Conversely trace class forces the diagonal sum to be finite by [F5]. [F3, F5, step 1.1, step 3.1, algebra]

5.1 [Upper and lower bounds and finiteness] Let $Q:=\sum_jq_j\in(0,\infty]$. The sum over all ordered words of length $N$ is $Q^N$: on the first $m$ modes it is $(\sum_{j\le m}q_j)^N$, and every finite collection of words is contained in one such prefix. The nondecreasing and strictly increasing index sets are subsets of the ordered-word set, giving $Z_N^\sigma\le Q^N$. For $N\ge2$, configurations selecting modes $1,\ldots,N-1$ once each and one additional mode $j\ge N$ are valid for both statistics, distinct as $j$ varies, and have weight $(\prod_{k=1}^{N-1}q_k)q_j$. Their sum gives the lower bound. For $N=1$, every configuration is the single mode $j$, so both traces equal $Q$; the empty product is $1$ and the tail starts at $1$. For any $N$, the lower-bound coefficient is strictly positive and finite, and the omitted initial segment of $Q$ is finite. Hence $Q=\infty$ forces $Z_N^\sigma=\infty$, whereas $Q<\infty$ gives $Z_N^\sigma<\infty$ by the upper bound. The single configuration $\{1,\ldots,N\}$ has positive weight for either sign, so both traces are strictly positive. This proves all of (c). No sum over particle numbers or full-Fock product formula is used. [step 4.1, given, algebra] ∎
