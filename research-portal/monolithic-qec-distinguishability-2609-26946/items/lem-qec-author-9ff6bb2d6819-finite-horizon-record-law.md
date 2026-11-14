---
id: lem-qec-author-9ff6bb2d6819-finite-horizon-record-law
kind: lemma
domain: mathematics
title: Normalized record measure and absence of explosion
status: draft
origin: session
deps:
  - lem-qec-author-9ff6bb2d6819-no-jump-survival
  - lem-qec-author-9ff6bb2d6819-marked-waiting-kernel
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:def-axiom-of-choice
  - math:def-borel-sigma-algebra
  - math:def-product-sigma-algebra-and-finite-product-sigma-algebras
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:prop-counting-measure-is-a-measure
  - math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - math:def-probability-measure
  - math:def-stochastic-process-and-finite-dimensional-distributions
  - math:def-conditional-law-given-a-random-element
  - math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - math:def-nonnegative-lebesgue-integral
  - math:def-integral-of-a-nonnegative-simple-function
dependency_roles:
  lem-qec-author-9ff6bb2d6819-no-jump-survival: mathematical-premise
  lem-qec-author-9ff6bb2d6819-marked-waiting-kernel: mathematical-premise
  math:thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-borel-sigma-algebra: mathematical-premise
  math:def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  math:def-measurable-function-between-measurable-spaces: mathematical-premise
  math:thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  math:thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  math:prop-counting-measure-is-a-measure: mathematical-premise
  math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-stochastic-process-and-finite-dimensional-distributions: mathematical-premise
  math:def-conditional-law-given-a-random-element: mathematical-premise
  math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  math:def-nonnegative-lebesgue-integral: mathematical-premise
  math:def-integral-of-a-nonnegative-simple-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative
        dynamics in quantum optics
      url: https://arxiv.org/abs/quant-ph/9702007
      locator: Section IV.C, PDF pp. 46–49, Eqs. (120)–(133), especially (122),
        (124)–(128)
      reading_limits: Retained contextual bibliography, not an imported premise. This
        adjudication read the current item and its mathematical suppliers, but
        did not reread Plenio–Knight or verify the contextual locator. The
        record law, normalization and measurability below are local derivations;
        no published general existence theorem, full-paper reading or
        independent acceptance is claimed.
dependency_level: 3
---

## Statement

Use the finite no-jump matrices $L_a,Q,B,V_t$ and maps $S_t$ of the no-jump survival lemma, assume AC, and fix a finite horizon $U>0$ and initial density matrix $\rho$. Put $M=\{1,\ldots,m\}$, possibly empty. For $n\ge1$, let $\Delta_n(U)=\{(t_1,\ldots,t_n):0<t_1<\cdots<t_n<U\}$ and $E_n(U)=\Delta_n(U)\times M^n$, with the Borel sigma-algebra from the Euclidean time coordinates and discrete marks. Let $E_0(U)=\{\varnothing\}$ be the empty-record singleton. The record space is $\Omega_U=\bigsqcup_{n\ge0}E_n(U)$, with sigma-algebra $\mathcal A_U=\{A\subseteq\Omega_U:A\cap E_n(U)\text{ is Borel for every }n\}$. On $E_n(U)$ let $\mu_n$ be the restriction of the product of $n$ copies of Borel Lebesgue measure on $(0,U)$ and counting measure on $M^n$; let $\mu_0$ give the singleton mass one.

For a record with $n>0$, put $t_0=0$, $W_n=L_{a_n}V_{t_n-t_{n-1}}\cdots L_{a_1}V_{t_1}$ and $K_U=V_{U-t_n}W_n$; put $W_0=I$ and $K_U=V_U$ on the empty record. Then $\mathbb P_U(A)=\sum_{n\ge0}\int_{A\cap E_n(U)}\operatorname{Tr}(K_U\rho K_U^\dagger)\,d\mu_n$ defines a probability measure on $(\Omega_U,\mathcal A_U)$. For $0<t\le U$, the restriction $R_{U,t}$ keeps precisely the events strictly before $t$; it is measurable and its pushforward law is $\mathbb P_t$. At $t=0$ the restriction is the empty record. The successive waiting laws are the marked kernels of the waiting-kernel lemma, with all waiting outcomes beyond the remaining horizon combined into the no-further-event outcome.

The associated counting process $N_t=\#\{j:t_j\le t\}$, $0\le t\le U$, has measurable coordinates, is simple and non-explosive, and has right-continuous unit-jump paths. For each fixed $t$, an event exactly at $t$ has probability zero, so using $\le t$ for $N_t$ and $<t$ for the restriction gives the same count almost surely. If $Q\le rI$ with $r\ge0$, then $\Pr(N_t\ge n)\le (rt)^n/n!$ for every $n\ge1$ and $0\le t\le U$.

## Facts & Assumptions

[F1] No-jump evolution contracts the trace of positive matrices, and supplies $V_t$ and $Q$. [[lem-qec-author-9ff6bb2d6819-no-jump-survival]]

[F2] The explicit normalized waiting kernels have the displayed survival, marked densities, measurable state updates and post-event states. [[lem-qec-author-9ff6bb2d6819-marked-waiting-kernel]]

[F3] Tonelli applies to nonnegative product-measurable densities on sigma-finite products; it permits reordering event-time integrals, mark sums and nonnegative series. [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] Assume AC. Its Countable Choice consequence is used for the Lebesgue-measure suppliers. The record and state formulas make no further selection of conditional versions. [[math:def-axiom-of-choice]]

[F5] Borel sigma-algebras are generated by open sets, product sigma-algebras by measurable rectangles, and measurability means that inverse images of measurable sets are measurable. [[math:def-borel-sigma-algebra]] [[math:def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[math:def-measurable-function-between-measurable-spaces]]

[F6] Under Countable Choice, Lebesgue measure is a measure extending interval length and every Borel set is Lebesgue measurable. Counting measure is a measure. Sigma-finite measures have sigma-finite product measures with the rectangle formula. [[math:thm-lebesgue-measure-is-a-complete-measure]] [[math:thm-borel-sets-are-lebesgue-measurable]] [[math:prop-counting-measure-is-a-measure]] [[math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F7] On any measure space, integrating a nonnegative measurable density over measurable sets defines a measure. [[math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F8] A probability measure is a measure of total mass one; together with its measurable space it defines a probability space. [[math:def-probability-measure]]

[F9] A family of measurable random elements indexed by time is a stochastic process. Here the count state space is $\mathbb N_0$ with its discrete sigma-algebra. [[math:def-stochastic-process-and-finite-dimensional-distributions]]

[F10] A conditional law of a random element $Y$ given a random element $P$ is a probability kernel $C$ from the prefix space to the outcome space whose evaluations satisfy $\int_{P^{-1}(B)}C(P(\omega),A)\,d\mathbb P=\mathbb P(P\in B,Y\in A)$ for every measurable $A,B$. This is the defining identity on $\sigma(P)$, and does not condition by division by the probability of a singleton prefix. [[math:def-conditional-law-given-a-random-element]]

[F11] For every Lebesgue measurable $E\subseteq\mathbb R$ and $b\in\mathbb R$, the translate $E+b$ is Lebesgue measurable and has the same Lebesgue measure. [[math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F12] The integral of a nonnegative simple function is the sum of its coefficients times the measures of its disjoint level sets. The nonnegative Lebesgue integral is the supremum of these simple integrals over all nonnegative simple minorants. [[math:def-integral-of-a-nonnegative-simple-function]] [[math:def-nonnegative-lebesgue-integral]]

## Proof

**Given:** The finite no-jump data, AC, a finite horizon, initial state and record coordinates as in the statement.

**Goal:** Construct and normalize the measurable record law, prove measurable consistent restrictions, and bound its jump-count tails.

1.1 The component Borel sigma-algebras agree with the time-and-mark product sigma-algebras: rational open boxes form a countable basis for each Euclidean time space, so open sets are countable unions of basic rectangles; the finite discrete mark space adds only finitely many pieces. Thus the ordered simplexes are measurable, and [F6] supplies the finite component base measures $\mu_n$. The matrix densities are continuous in the time coordinates for each mark word and nonnegative, hence Borel measurable by [F5]. For $n\ge1$, define $q_n(t)$ by integrating $\operatorname{Tr}(W_n\rho W_n^\dagger)$ over the ordered $n$ event times up to $t$ and summing marks; let $q_0(t)=1$. For any positive $X$, $\sum_a\operatorname{Tr}(L_aXL_a^\dagger)=\operatorname{Tr}(QX)\le r\operatorname{Tr}X$, while each intervening $S_v$ contracts trace. Summing marks successively from the last mark backwards bounds the summed integrand by $r^n$. The ordered simplex has volume $t^n/n!$, by iterating the elementary integral of $t^{n-1}/(n-1)!$. Hence $q_n(t)\le(rt)^n/n!$. An available bound always exists: take $r=\|Q\|$, the largest eigenvalue of the positive matrix $Q$. If $M$ is empty, every positive-event component is empty and $q_n(t)=0$ for $n\ge1$. [given, F1, F3, F4, F5, F6, algebra]

1.2 Write $\lambda$ for Borel Lebesgue measure on $\mathbb R$. Translation is a Borel bijection with Borel inverse, and [F11] gives $\lambda(E+b)=\lambda(E)$ for every Borel $E$. For $\ell\ge1$ and $b\in\mathbb R^\ell$, the translated product measure and $\lambda^{\otimes\ell}$ agree on rectangles by the one-dimensional identity, and are sigma-finite; the uniqueness clause in [F6], iterated through the finite factors, makes them equal on all product-Borel sets. For a Borel $D\subseteq\mathbb R^\ell$ and nonnegative Borel $g$ on $D+b$, it follows first for indicators, then for nonnegative simple functions by their coefficient-sum definition, and finally for $g$ by the supremum definition in [F12], that $$\int_{D+b}g(v)\,d\lambda^{\otimes\ell}(v)=\int_D g(u+b)\,d\lambda^{\otimes\ell}(u).$$ The last passage uses the bijection between simple minorants given by composition with the translation and its inverse. Restricting to intervals or ordered simplexes preserves this identity, and summing unchanged discrete marks preserves it as well. With no time coordinates the identity is immediate. When $b$ depends on a fixed prefix, apply this identity separately for each prefix and then use [F3] for the nonnegative outer integral; the translations used below depend continuously on the prefix time, so the composed integrands remain product-measurable. [F3, F5, F6, F11, F12, construct, algebra]

2.1 The family $\mathcal A_U$ is a sigma-algebra: intersections with any component commute with complements relative to $\Omega_U$ and with countable unions. By step 1.1 and [F7], each $\nu_n(A_n)=\int_{A_n}\operatorname{Tr}(K_U\rho K_U^\dagger)\,d\mu_n$ is a measure on $E_n(U)$, including the singleton component. Define $\mathbb P_U(A)=\sum_n\nu_n(A\cap E_n(U))$. It vanishes at the empty set. For pairwise disjoint $A_j\in\mathcal A_U$, component countable additivity gives $\mathbb P_U(\bigcup_j A_j)=\sum_n\sum_j\nu_n(A_j\cap E_n(U))=\sum_j\mathbb P_U(A_j)$. The interchange holds for nonnegative double series, since either order is the supremum of the sums over finite rectangles of indices, or by [F3] on counting spaces. Thus the proposed law is a countably additive measure before normalization. [F3, F5, F6, F7, step 1.1, construct]

3.1 Let $p_n(U)=\nu_n(E_n(U))$. For a prefix ending at $t_n$, set $X=W_n\rho W_n^\dagger$, with $X=\rho$ and $t_n=0$ when $n=0$. The waiting-kernel identity, multiplied by $\operatorname{Tr}X$, says $\operatorname{Tr}(S_{U-t_n}(X))+\sum_a\int_0^{U-t_n}\operatorname{Tr}(L_aS_u(X)L_a^\dagger)\,du=\operatorname{Tr}X$. It also holds when $\operatorname{Tr}X=0$, since positivity then gives $X=0$. For each fixed prefix, step 1.2 permits the change from the absolute next-event time $v\in(t_n,U)$ to $u=v-t_n$. Integrating prefixes by [F3] therefore gives $p_n(U)=q_n(U)-q_{n+1}(U)$, including $n=0$. Products of successive normalized waiting densities and terminal survival factors cancel their trace denominators, leaving exactly $\operatorname{Tr}(K_U\rho K_U^\dagger)$; zero-density prefixes contribute zero. Hence $\sum_{n=0}^{k-1}p_n(U)=1-q_k(U)\to1$: for $rU>0$, the bound $(rU)^k/k!$ has successive ratio $rU/(k+1)\le1/2$ eventually, and the case $rU=0$ is immediate. Therefore step 2.1 has total mass one and is a probability measure by [F8]. This argument holds for every density matrix and finite remaining horizon, without presupposing a stochastic existence theorem. [F1, F2, F3, F8, step 1.1, step 1.2, step 2.1, algebra]

3.2 For fixed $0<t<U$, partition each $E_n(U)$ according to $k=\#\{j:t_j<t\}$. These pieces are Borel, as the cut conditions are coordinate inequalities. On each piece $R_{U,t}$ is the coordinate projection onto the first $k$ time-and-mark pairs, with the constant empty record for $k=0$. Inverse images of Borel subsets of $E_k(t)$ are Borel by continuity of this projection, and taking the finite union over $k$ and the countable union over $n$ proves measurability for $\mathcal A_t$. The endpoint restrictions are constant at zero and the identity at $U$. Also $N_t=\sum_{j=1}^n\mathbf1_{\{t_j\le t\}}$ on $E_n(U)$, so each $N_t$ is measurable into the discrete space $\mathbb N_0$. By [F9], this family on $(\Omega_U,\mathcal A_U,\mathbb P_U)$ is a stochastic process. For each fixed $t$, the coordinate sets $\{t_j=t\}$ have base measure zero by the product rectangle formula and Tonelli, because a singleton time has Lebesgue measure zero. Their finite union on each component, then countable union over components, has $\mathbb P_U$-measure zero by [F7] and step 2.1. Thus the strict and non-strict count conventions agree almost surely at each fixed time. [F3, F5, F6, F7, F9, step 1.1, step 2.1, algebra, construct]

4.1 Fix $0<t<U$ and a prefix of $k$ events before $t$. Its unnormalized state at $t$ is $X_t=K_t\rho K_t^\dagger$ with weight $w=\operatorname{Tr}X_t$. If $w>0$, every completed continuation after $t$ factors into the prefix weight times the same record density on horizon $U-t$ with initial state $X_t/w$; this follows from multiplication of the matrices defining $K_U$. Step 1.2 sends the absolute continuation times $v_j\in(t,U)$ to $v_j-t\in(0,U-t)$ without changing their product-time/counting-mark measure. By step 3.1 those continuation densities have total mass one. If $w=0$, positivity gives $X_t=0$ and every continuation density vanishes. The state maps are measurable by [F2]. Multiplying by the indicator of any Borel prefix event and using [F3] to integrate and sum continuations therefore leaves exactly its $\mathbb P_t$ weight. The null event at the cut, from step 3.2, is harmless. This proves $(R_{U,t})_*\mathbb P_U=\mathbb P_t$; the endpoint cases are immediate. Finally $\Pr(N_t\ge n)=\sum_{k\ge n}p_k(t)=q_n(t)\le(rt)^n/n!$, using the telescoping identity and vanishing remainder; at $t=0$ both sides are zero for $n\ge1$. Every record contains finitely many strictly ordered times, so its count path is right-continuous with unit jumps and finitely many jumps on the horizon. The process is therefore simple and non-explosive. [F1, F2, F3, F9, step 1.1, step 1.2, step 3.1, step 3.2, algebra]

4.2 To specify successive conditioning, fix an integer $k\ge0$ and give $\mathcal P_k=E_k(U)\sqcup\{\partial\}$ the component Borel sigma-algebra, with $\partial$ isolated. The random prefix $P_k$ is the first $k$ time-and-mark pairs when $N_U\ge k$, and is $\partial$ otherwise; $P_0$ is always the empty record. Give $D=((0,U)\times M)\sqcup\{\dagger\}$ the analogous sigma-algebra, with $\dagger$ the censored next-outcome symbol. Define $Y_k=(t_{k+1}-t_k,a_{k+1})$ when $N_U\ge k+1$, with $t_0=0$, and $Y_k=\dagger$ otherwise. On every record component these maps are either coordinate projections, continuous differences of coordinates, or constants on measurable pieces, so they are measurable by [F5]. For $p\in E_k(U)$ write $s(p)=t_k$ (zero for $k=0$), $w_k(p)=\operatorname{Tr}(W_k\rho W_k^\dagger)$ and $\sigma(p)=W_k\rho W_k^\dagger/w_k(p)$ on $w_k>0$. Integrating all continuations after $s(p)$ gives prefix-law density $w_k(p)$ on $E_k(U)$: indeed the matrix product factors as $W_k$ followed by a record on horizon $U-s(p)$, and step 1.2 shifts every continuation time by $-s(p)$ without changing its base measure. Step 3.1 then normalizes that continuation for every positive-weight state. Precisely, for every Borel $B\subseteq E_k(U)$, $\mathbb P_U(P_k\in B)=\int_B w_k(p)\,d\mu_k(p)$. Zero-weight prefixes have zero mass; on them the matrix vanishes and all continuation weights vanish. This argument uses prefix densities, not probabilities of individual continuous prefixes. [F1, F2, F3, F5, step 1.2, step 3.1, algebra, construct]

5.1 For $p\in E_k(U)$ with $w_k(p)>0$, put $h(p)=U-s(p)$ and define the candidate next-outcome kernel by $$C_k(p,A)=\sum_{a\in M}\int_0^{h(p)}\mathbf1_A((u,a))f_{\sigma(p),a}(u)\,du+\mathbf1_A(\dagger)s_{\sigma(p)}(h(p)).$$ Here $f_{\sigma,a}$ and $s_\sigma$ are the marked density and survivor in [F2]. For $p=\partial$ or $w_k(p)=0$ set $C_k(p,\cdot)=\delta_\dagger$. Every section is a probability measure: it is the [F2] waiting law with waiting times at or beyond $h(p)$, including the infinite no-event outcome, sent to $\dagger$; a finite endpoint has zero waiting-law mass. For each measurable $A\subseteq D$, its evaluation is Borel in $p$. Indeed $w_k$ is continuous on each mark component, the positive-weight set is open, and $\sigma(p)$ is continuous there. The integrand on the fixed interval $(0,U)$, multiplied by $\mathbf1_{\{u<h(p)\}}$, is nonnegative and product-measurable, so its parameter integral is measurable by [F3]. The prefix base measure $\mu_k$ and interval Lebesgue measure are finite, as required there; the singleton case $k=0$ is immediate. The survivor term is continuous on each positive-weight component, and the complementary assignment is constant on a Borel set. Thus $C_k$ is a probability kernel as required in [F10]. [F1, F2, F3, F5, F6, F10, step 1.1, step 4.2, construct]

6.1 For any measurable $A\subseteq D$ and Borel $B\subseteq E_k(U)$, separating the next waiting time and mark from its later continuation gives $$\mathbb P_U(P_k\in B,Y_k\in A)=\int_B w_k(p)C_k(p,A)\,d\mu_k(p).$$ To see this directly, the branch with no further event has density $w_k(p)s_{\sigma(p)}(U-s(p))$ and outcome $\dagger$. A next event $(u,a)$ with $0<u<U-s(p)$ has density $w_k(p)f_{\sigma(p),a}(u)$ after all later records have been integrated out by step 3.1 from the post-event state in [F2]. At zero next-event density its entire contribution is zero. Tonelli permits these nonnegative sums and iterated integrals; step 1.2 justifies the translation from the next absolute time $v$ to $u=v-s(p)$ and the shifts of later continuation times, for each fixed prefix, preserving the relevant Lebesgue integrals. Step 4.2 then identifies the displayed right side with $\int_{P_k^{-1}(B)}C_k(P_k(\omega),A)\,d\mathbb P_U$. On $\{P_k=\partial\}$ one has $Y_k=\dagger$ and $C_k=\delta_\dagger$, so the same identity holds for every measurable $B\subseteq\mathcal P_k$. By [F10] this is exactly the conditional-law identity for $Y_k$ given $P_k$. It establishes each successive censored waiting law, including $k=0$ and the empty mark family, without invoking a general conditional-distribution existence theorem or selecting versions. Together with the process and tail arguments above, this proves all assertions. [F1, F2, F3, F10, step 1.2, step 3.1, step 4.1, step 4.2, step 5.1, algebra] ∎

## Source notes

Plenio–Knight, Section IV.C, Eqs. (122), (124)–(128), is retained as contextual bibliography for the no-jump/jump split. No general existence theorem is imported from it. This item supplies its own finite-matrix and measure-construction arguments from the declared mathematical suppliers.
