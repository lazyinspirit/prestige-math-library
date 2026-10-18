---
id: thm-jordan-hall-pairing-and-hall-littlewood-basis
kind: theorem
title: "Jordan Hall classes are Hall–Littlewood functions with the transported Green pairing"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - thm-generic-jordan-hall-algebra-is-symmetric-functions
  - lem-jordan-block-automorphism-count
  - def-hall-littlewood-scalar-product-and-functions
  - def-formal-exponential-logarithm-and-powers
  - thm-formal-exponential-logarithm-identities
  - def-dominance-order-on-partitions
  - lem-conjugation-reverses-dominance
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - thm-euclid-infinitude-of-primes
  - thm-z-mod-p-is-a-field
  - thm-standard-representatives-modulo-n
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, §§2.3–2.4, Lemma 2.8 and (2.9)"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, III §§2–4 and VI §1"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Extend the generic Jordan Hall algebra of
[[thm-generic-jordan-hall-algebra-is-symmetric-functions]] to $\mathbb Q(t)$,
and use **that theorem's exact map**
$\Phi_t(u_{(1^r)})=t^{-\binom r2}e_r$.
Let $n(\lambda)$ and $b_\lambda(s)$ have the conventions of
[[def-hall-littlewood-scalar-product-and-functions]], and put
$$ a_\lambda(t)=t^{|\lambda|+2n(\lambda)}b_\lambda(t^{-1}). $$
Define the Jordan **Green pairing** to be the bilinear form
$$ (u_\lambda,u_\mu)_G=\delta_{\lambda\mu}a_\lambda(t)^{-1}. $$
It is nondegenerate and equals inverse automorphism counting at every
finite-field specialization $t=q$.
Then the Hall–Littlewood functions exist uniquely in the monic
orthogonal convention specified there, and
$$ \Phi_t(u_\lambda)=t^{-n(\lambda)}P_\lambda(x;t^{-1}),\qquad \langle P_\lambda,P_\mu\rangle_s=\delta_{\lambda\mu}b_\lambda(s)^{-1}. $$
More precisely, if $f,g\in\Lambda^d_{\mathbb Q(t)}$, then
$$ (\Phi_t^{-1}f,\Phi_t^{-1}g)_G=t^{-d}\langle f,g\rangle_{t^{-1}}. $$
Different degrees are orthogonal. In particular the transported pairing on
power sums is
$$ (\Phi_t^{-1}p_\lambda,\Phi_t^{-1}p_\mu)_G=\delta_{\lambda\mu}z_\lambda\prod_i(t^{\lambda_i}-1)^{-1}. $$
The empty partition gives $1$, with norm $1$. All the displayed basis and
pairing identities specialize at $t=q>1$ and at $s=q^{-1}$.
The pairing normalization is a degree scaling of the standard
Hall–Littlewood form; it is not the ordinary symmetric-function Hall inner
product.

## Facts & Assumptions

**Given:** The generic Jordan Hall algebra, its exact generator-normalized
map $\Phi_t$, a finite field of size $q$ for counting steps, and partitions.
All generating series below are formal: every coefficient used involves
only finite-dimensional homogeneous spaces.

[F1] The generic map is an algebra isomorphism with
$\Phi_t(u_{(1^r)})=t^{-\binom r2}e_r$; its proof establishes the Hall flag
formula and the unitriangular expansion of the monomials
$X_\lambda=\prod_j u_{(1^{\lambda'_j})}$ in Jordan classes, ordered by kernel
dimensions ([[thm-generic-jordan-hall-algebra-is-symmetric-functions]]).

[F2] The automorphism count is $a_\lambda(q)$ as displayed above
([[lem-jordan-block-automorphism-count]]).

[F3] Power sums are a basis over $\mathbb Q$ and monomial symmetric
functions are an integral stable basis
([[prop-power-sums-form-a-rational-not-integral-stable-basis]],
[[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F4] Dominance compares row prefix sums, and conjugation reverses dominance
([[def-dominance-order-on-partitions]], [[lem-conjugation-reverses-dominance]]).

[F5] The Hall–Littlewood form has power-sum diagonal
$z_\lambda\prod_i(1-s^{\lambda_i})^{-1}$, and its desired monic basis is
specified by orthogonality and dominance triangularity
([[def-hall-littlewood-scalar-product-and-functions]]).

[F6] Infinitely many prime cardinalities give finite fields, and a nonzero
polynomial has only finitely many real roots
([[thm-euclid-infinitude-of-primes]], [[thm-z-mod-p-is-a-field]],
[[thm-standard-representatives-modulo-n]],
[[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]).

[F7] In any commutative $\mathbb Q$-algebra $R$, the series $\exp(u)$ and
$\log(1+u)$ for $u\in zR\llbracket z\rrbracket$ are defined by their
coefficientwise finite power expansions and are inverse group homomorphisms;
in particular $\log(AB)=\log A+\log B$ for units with constant term $1$
([[def-formal-exponential-logarithm-and-powers]],
[[thm-formal-exponential-logarithm-identities]]).

## Proof

1.1 For a composition $a=(a_1,\ldots,a_r)$ of $d$, allowing zero parts, let $X_a=\prod_i u_{(1^{a_i})}$ and $A(a)=\sum_i\binom{a_i}{2}$. By the Hall flag formula [F1], the coefficient of $u_\lambda$ in $X_a$ at $t=q$ counts flags $0=F_0\subseteq F_1\subseteq\cdots\subseteq F_r=k^d$ with $\dim(F_i/F_{i-1})=a_i$ and $T(F_i)\subseteq F_{i-1}$, when $T$ has type $\lambda$. A repeated subspace is permitted exactly when the corresponding part is zero. Product order reverses the quotient order, but the Jordan Hall algebra is commutative by [F1], so these flags give the stated coefficient. [F1]

1.2 Put $Y_\lambda=t^{n(\lambda)}\Phi_t(u_\lambda)$. The identity $n(\lambda)=\sum_j\binom{\lambda'_j}{2}$ follows by counting pairs of boxes in each column. The unitriangular Hall relation in [F1], using $\dim\ker T^i=\sum_{j\le i}\lambda'_j$, and dominance reversal [F4], gives $$ e_{\lambda'}=Y_\lambda+\sum_{\mu\lhd\lambda}c_{\lambda\mu}(t)t^{n(\lambda)-n(\mu)}Y_\mu. $$ Here $e_{\lambda'}=\prod_j e_{\lambda'_j}$, and strict kernel inequalities are exactly strict dominance in the opposite row direction. [F1, F4, algebra]

2.1 Consequently $(X_a,X_b)_G$ at $t=q$ equals $\sum_\lambda N_a(T_\lambda)N_b(T_\lambda)/a_\lambda(q)$, where $N_a(T)$ counts all actual flags of type $a$ lowered by a fixed operator $T$, and $T_\lambda$ is one operator of each Jordan type. To rewrite this as a count of all such triples $(T,F,G)$ on $k^d$, fix $T=T_\lambda$ and let $H=\operatorname{GL}_d(k)$ act on its conjugates. The stabilizer of $T$ is $H_T=\{h\in H:hT=Th\}=\operatorname{Aut}(I_\lambda)$, of order $a_\lambda(q)$ by [F2]. The map $H\to H\cdot T$, $h\mapsto hTh^{-1}$, is surjective, and two elements $h_1,h_2$ have the same image exactly when $h_2^{-1}h_1\in H_T$. Thus each fiber is a coset of $H_T$, so this conjugacy class has $|H|/a_\lambda(q)$ elements. Conjugation transports the lowered flags bijectively, so $N_a(T)N_b(T)$ is constant on the class. Therefore the weighted sum over Jordan types is exactly $1/|H|$ times the number of all such triples. Lowering either finite flag makes $T$ nilpotent. [F1, F2, step 1.1, algebra]

2.2 Two flags have a common splitting $k^d=\bigoplus_{i,j}W_{ij}$ with $F_i\cap G_j=\bigoplus_{h\le i,l\le j}W_{hl}$. Construct this by choosing a complement of $(F_{i-1}\cap G_j)+(F_i\cap G_{j-1})$ inside $F_i\cap G_j$ successively in increasing $i+j$; the intersection of those two summands is $F_{i-1}\cap G_{j-1}$, so induction verifies the direct-sum description. Put $m_{ij}=\dim W_{ij}$. These nonnegative integers have row sums $a_i$ and column sums $b_j$. Conversely every such matrix is realized by standard coordinate blocks. Sending adapted bases to one another shows that $\operatorname{GL}_d(k)$ is transitive on pairs of flags with the same matrix. This is finite-dimensional basis selection only. [step 1.1, construct, algebra]

2.3 Expanding $e_{\lambda'}$ in monomials gives $m_\lambda$ with coefficient $1$ and only terms $m_\mu$ for $\mu\lhd\lambda$ besides it. Indeed each factor $e_{\lambda'_j}$ selects $\lambda'_j$ distinct variables. For a resulting exponent vector arranged decreasingly, the sum of its first $r$ exponents is at most $\sum_j\min(r,\lambda'_j)=\sum_{i\le r}\lambda_i$, giving the dominance bound. For the specific monomial $x_1^{\lambda_1}x_2^{\lambda_2}\cdots$, equality holds in this bound for every $r$, so the variables selected in column $j$ must be exactly $x_1,\ldots,x_{\lambda'_j}$; this is the unique selection. Inverting the finite unitriangular system in step 1.2 now proves $Y_\lambda=m_\lambda+\sum_{\mu\lhd\lambda}d_{\lambda\mu}(t)m_\mu$. [F3, F4, step 1.2, algebra]

3.1 Fix that splitting. The algebra of endomorphisms preserving both flags consists of blocks from $W_{ij}$ to $W_{hl}$ with $h\le i$ and $l\le j$. Its off-diagonal blocks form a nilpotent ideal: each nonzero off-diagonal multiplication strictly decreases $i+j$. Thus an element is invertible exactly when every diagonal block is invertible, either by a finite geometric-series inverse after removing its invertible diagonal or by triangularity. If $v=\sum_{i,j}\sum_{h\le i,l\le j}m_{ij}m_{hl}-\sum_{i,j}m_{ij}^2$, the stabilizer of the flags has order $q^v\prod_{ij}|\operatorname{GL}_{m_{ij}}(k)|$. A map lowering both flags has blocks with $h<i,l<j$, so the space of such maps has dimension $w=\sum_{i,j}\sum_{h<i,l<j}m_{ij}m_{hl}$. [step 2.2, algebra]

4.1 The contribution of this matrix to the mass in step 2.1 is therefore $q^{w-v}/\prod_{ij}|\operatorname{GL}_{m_{ij}}(k)|$. Subtracting the block sums gives $v-w=\sum_i\sum_{j>l}m_{ij}m_{il}+\sum_j\sum_{i>h}m_{ij}m_{hj}=\frac12(\sum_i a_i^2+\sum_j b_j^2-2\sum_{ij}m_{ij}^2)$. Since $\Phi_q(X_a)=q^{-A(a)}e_{a_1}\cdots e_{a_r}$, multiplication by $q^{A(a)+A(b)}$ turns that contribution into $\prod_{ij}q^{m_{ij}^2-m_{ij}}/|\operatorname{GL}_{m_{ij}}(k)|$. Using $|\operatorname{GL}_m(k)|=q^{m^2}\prod_{h=1}^m(1-q^{-h})$, already proved in [F2], it follows that the transported form $B_q(f,g)=(\Phi_q^{-1}f,\Phi_q^{-1}g)_G$ satisfies $$ B_q(e_{a_1}\cdots e_{a_r},e_{b_1}\cdots e_{b_l})=\sum_{m\,:\,\mathrm{row}(m)=a,\,\mathrm{col}(m)=b}\ \prod_{ij}\frac{q^{-m_{ij}}}{\prod_{h=1}^{m_{ij}}(1-q^{-h})}. $$ This includes $d=0$, whose only matrix has zero entries and mass $1$. [F1, F2, step 2.1, step 2.2, step 3.1, algebra]

5.1 Let $C_q(z)=\sum_{m\ge0}c_mz^m$, where $c_m=q^{-m}/\prod_{h=1}^m(1-q^{-h})$. The recurrence $c_m(1-q^{-m})=q^{-1}c_{m-1}$ is equivalent to $C_q(q^{-1}z)=(1-q^{-1}z)C_q(z)$. For $L(z)=\log C_q(z)$ in $\mathbb Q\llbracket z\rrbracket$, [F7] and substitution give $L(q^{-1}z)-L(z)=\log(1-q^{-1}z)=-\sum_{h\ge1}q^{-h}z^h/h$. Substitution $z\mapsto q^{-1}z$ commutes with these power-series definitions because every coefficient is a finite sum. Comparing coefficients, using $q>1$, gives $$ \log C_q(z)=\sum_{h\ge1}\frac{z^h}{h(q^h-1)}. $$ For $E(z)=\sum_{n\ge0}e_nz^n$, apply [F7] in the commutative $\mathbb Q$-algebra $\mathbb Q[x_1,\ldots,x_N]$: the logarithm of the finite product $\prod_i(1+x_i z)$ is $\sum_{h\ge1}(-1)^{h-1}(\sum_i x_i^h)z^h/h$. Applying the inverse exponential and passing coefficientwise through the stable rank projections yields $E(z)=\exp(\sum_{h\ge1}(-1)^{h-1}p_hz^h/h)$ in $\Lambda_{\mathbb Q}\llbracket z\rrbracket$. Step 4.1 therefore says $$ B_q\left(\prod_i E(z_i),\prod_j E(w_j)\right)=\prod_{ij}C_q(z_iw_j)=\exp\left(\sum_{h\ge1}\frac{(\sum_i z_i^h)(\sum_j w_j^h)}{h(q^h-1)}\right). $$ Only finitely many $z_i,w_j$ are used. To apply the univariate identities [F7] to this last multivariable expression, replace each $z_i,w_j$ by $vz_i,vw_j$ for an auxiliary variable $v$ and work in $R\llbracket v\rrbracket$, with $R$ equal to $\mathbb Q[z_i,w_j]$ or $\Lambda_{\mathbb Q}[z_i,w_j]$ as appropriate. These are commutative $\mathbb Q$-algebras; all exponential arguments have positive $v$-order and all logarithm arguments have constant term $1$. Each coefficient of $v$ is a finite homogeneous polynomial, so comparison recovers precisely the total-degree formal identities. The same observation applies to the following exponential comparison. All these coefficient-ring hypotheses also hold over $\mathbb Q(t)$. [F3, F7, step 4.1, algebra]

6.1 Define a form $D_q$ on the power-sum basis by $D_q(p_\lambda,p_\mu)=\delta_{\lambda\mu}z_\lambda\prod_i(q^{\lambda_i}-1)^{-1}$. Expanding the two exponentials for $E$ in step 5.1 and using this diagonal rule yields the same final exponential: for each $h$, the equal multiplicities $m$ contribute $((\sum_i z_i^h)(\sum_j w_j^h)/(h(q^h-1)))^m/m!$, since the two signs cancel. Thus $B_q$ and $D_q$ agree on every product of elementary functions in both arguments, which spans by [F1]. They are equal. On degree $d$, the displayed power-sum diagonal of $D_q$ is $q^{-d}$ times that of $\langle\ ,\ \rangle_{q^{-1}}$. [F1, F3, F5, F7, step 5.1, algebra]

7.1 For each fixed degree the entries of the generic transported form are rational functions of $t$: [F1] gives Laurent-polynomial images and inverse generator formulas, and [F2] gives the rational diagonal denominators $a_\lambda(t)$, none vanishing at $t=q>1$. Step 6.1 proves the desired pairing identity at every finite-field cardinality. Clearing denominators, its difference is a polynomial vanishing at infinitely many prime cardinalities, hence zero by [F6]. It follows that $B_t=t^{-d}\langle\ ,\ \rangle_{t^{-1}}$ on degree $d$, and the asserted generic power-sum formula holds. [F1, F2, F6, step 6.1, algebra]

8.1 The $Y_\lambda$ are pairwise orthogonal for $B_t$, since the $u_\lambda$ are so by its definition; step 7.1 makes them orthogonal for the Hall–Littlewood form as well. Their norms are $$ \langle Y_\lambda,Y_\lambda\rangle_{t^{-1}}=t^{|\lambda|+2n(\lambda)}a_\lambda(t)^{-1}=b_\lambda(t^{-1})^{-1}, $$ which are nonzero. Replace the indeterminate $t$ by $s^{-1}$ to obtain existence of the basis required in [F5]. For uniqueness, choose a linear extension of dominance in each finite degree, placing dominated partitions first. Inductively two monic triangular orthogonal bases agree on earlier indices; their difference at the next index lies in the span of these earlier basis vectors and is orthogonal to each. Each earlier norm is nonzero, so every coefficient of the difference is zero. This proves uniqueness and identifies $Y_\lambda=P_\lambda(x;t^{-1})$. [F2, F4, F5, step 7.1, step 2.3, algebra]

9.1 The triangular system in step 1.2 has Laurent-polynomial entries and diagonal $1$, so its finite-degree inverse has Laurent-polynomial entries. Hence the constructed $Y_\lambda$ and thus $P_\lambda(x;s)$ have no poles for $s\ne0$, in particular at $s=q^{-1}$. The pairing denominators also remain nonzero there. All identities therefore specialize as stated. The zero partition is the empty flag, $u_\varnothing=1$, $n(\varnothing)=0$, and $a_\varnothing=b_\varnothing=1$, so its image and norm are $1$. This proves every asserted normalization and boundary case without assuming a Green coproduct theorem or a physical interpretation. [F1, F2, F5, step 7.1, step 8.1, algebra] ∎

