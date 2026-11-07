---
dependency_level: 13
id: thm-w-trick-all-residue-window-majorants
kind: theorem
title: "All-residue window majorants, common mixtures and general scales"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-goldston-yildirim-loglog-cutoff-mixed-residue-averages
  - def-w-trick-prime-modulus
  - def-goldston-yildirim-truncated-divisor-sum
  - def-number-theoretic-mobius-function
  - lem-goldston-yildirim-divisor-function-maximal-order-bound
  - def-divisor-counting-function
  - thm-canonical-prime-factorisation
  - def-unit-group-modulo-n-and-euler-totient
  - thm-standard-representatives-modulo-n
  - thm-z-mod-p-is-a-field
  - def-factorial-and-falling-factorial
  - lem-integer-part
  - def-linear-forms-condition-for-a-measure
  - def-correlation-condition-for-a-measure
  - def-k-pseudorandom-measure
  - thm-holder-finite-real-exponents
  - thm-chebyshev-theta-linear-bounds
  - def-chebyshev-theta-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-power
  - thm-real-power-laws
  - thm-logarithm-slower-than-every-positive-power
  - thm-p-series-rational
  - lem-exponential-dominates-one-plus-x
  - lem-finite-set-has-max
  - def-w-tricked-von-mangoldt-function
  - def-prime-progression-discrepancy
  - def-prime
  - thm-chinese-remainder-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9 Propositions9.8,9.10 and §11 reduced-residue context; common mixtures/full cutoff/window and real-scale interface reconstructed locally, not imported."
---

## Statement

Fix $k\ge3$, $C_0>0$ and $0<\rho<1/2$, and put $M_k=4(3k-4)kk!$. Let $P\to\infty$ through primes, choose integer $w=w_P\ge2$ with $w\to\infty$ and $w\le C_0\log\log P$, and put $W=\prod_{p\le w}p$, $R=P^{1/(k2^{k+4})}$, $c=\varphi(W)/(W\log R)$. Let $I=[A,B]\cap\mathbb Z$ have integer endpoints satisfying
$$A\ge M_k\sqrt P,\qquad P-B\ge M_k\sqrt P,\qquad 0\le B-A\le\rho P.$$
For each $1\le b<W$ coprime to $W$, define on standard representatives $0\le n<P$
$$\nu_b(n)=1-\mathbf1_I(n)+c\Lambda_R(Wn+b)^2\mathbf1_I(n).$$
On $I$, where $Wn+b>1$, let $\widetilde\Lambda_{b,W}(n)=(\varphi(W)/W)\log(Wn+b)\mathbf1_{\{Wn+b\text{ prime}\}}$.

Each $\nu_b$ is nonnegative, has mean $1+o(1)$ and satisfies the full $(k2^{k-1},3k-4,k)$ linear-forms condition and $2^{k-1}$ PRODUCT correlation condition, hence is $k$-pseudorandom. On $I$ it dominates $\widetilde\Lambda_{b,W}/(k2^{k+5})$. More generally, for every nonempty finite INDEXED list $b_1,\ldots,b_T$ of these reduced representatives, with repetitions and even $P$-dependent $T$ allowed, the common measure
$$\overline\nu=T^{-1}\sum_{j=1}^T\nu_{b_j}$$
has the same two conditions, uniformly in the list, and on $I$ dominates $\widetilde\Lambda_{b_j,W}/(Tk2^{k+5})$ for each listed residue. Its pair-weight family is independent of the moment order and has every fixed integer moment bounded uniformly even in $T$. The errors are joint-limit bounds in $(P,w)$ with $w\to\infty$, not decay for fixed $w$.

If additionally, for every fixed $a_0,b_0>0$, there is $C_{a_0,b_0}>0$ such that for all real $x\ge3$, integers $1\le q\le(\log x)^{a_0}$ and reduced $a\pmod q$,
$$\left|\sum_{\substack{n\ge1,\ n\le x\\n\equiv a\pmod q}}\Lambda(n)-\frac{x}{\varphi(q)}\right|\le C_{a_0,b_0}x(\log x)^{-b_0},$$
where $\Lambda(p^j)=\log p$ for primes $p$, integers $j\ge1$, and is zero otherwise, then uniformly in these $b,I$,
$$P^{-1}\sum_{n\in I}\widetilde\Lambda_{b,W}(n)=|I|/P+o(1).$$
This is an explicit implication from the displayed estimate, not an unqualified invocation of a Siegel–Walfisz theorem.

There is also a general-scale application. For an arbitrary sufficiently large real $X$, let an integer affine system $\Psi$ have fixed size bound $\|\Psi\|_X\le L_0$, $L_0>0$, on a set $K\subseteq[-X,X]^d$ with every $\psi_i(x)>X^{7/10}$. Choose ANY integer $w(X)\to\infty$ satisfying $w\le\tfrac12\log\log X$ and $W<X^{7/10}$. Set
$$B_X=\left\lceil\frac{(L_0+1)X}{W}\right\rceil,\quad P_X=\min\{p\text{ prime}:p>8B_X\},\quad A_X=\left\lfloor\frac{X^{7/10}}{2W}\right\rfloor.$$
Then $P_X$ is within fixed positive factors of $X/W$, and $I_X=[A_X,B_X]\cap\mathbb Z$ is an admissible window above for large $X$ with $C_0=1$, $\rho=1/4$. For any integer residue vector $0\le a_j<W$ such that all $\psi_i(a)$ are units modulo $W$, let $b_i(a)\in\{1,\ldots,W-1\}$ be their representatives. All transformed integer values
$$\widetilde\psi_{i,a}(n)=\frac{\psi_i(Wn+a)-b_i(a)}W,\qquad Wn+a\in K,$$
lie in $I_X$. The common list $b_1(a),\ldots,b_t(a)$ therefore gives one majorant on $F_{P_X}$ dominating all their prime weights by the fixed factor $1/(tk2^{k+5})$, uniformly in $a$. Integer parameter intervals inject into that field. For any fixed budget $(m_*,t_*,\ell_*,r_*)$ of ADMISSIBLE tests in the actual LF/correlation Definitions, a fixed $k\ge\max(3,m_*,t_*+4,\lceil\ell_*\rceil,r_*)$ supplies those tests. These are uniform finite-test estimates on the auxiliary prime field, not a claim that $X$ is prime or that $\mathbb Z/X$ is a field.

In particular every prescribed nondecreasing cutoff $w(P)\to\infty$ with $w\log w=o(\log\log\log P)$, including prescribed plateaux satisfying that condition, is covered at the original window $[\epsilon_kP,2\epsilon_kP]\cap\mathbb Z$, $\epsilon_k=1/[2^k(k+4)!]$. With $T=1$ the domination coefficient is exactly the original $1/(k2^{k+5})$ for every reduced residue. Empty windows or lists can use the constant measure1, with no domination assertion for an empty list; finitely many earlier excluded prime indices can likewise be extended by measure1 and weight1. No choice axiom is assumed. No interval-uniformity, sparse generalized von Neumann or prime-pattern theorem is asserted.

## Facts & Assumptions

**Given:** Exactly the parameters and finite indexed lists above, and the complete displayed discrepancy estimate only when proving its conditional normalization clause. All prime-field families concern sufficiently large eligible primes; finite earlier extensions carry no prime-domination claim.

[F1] [[lem-goldston-yildirim-loglog-cutoff-mixed-residue-averages]] gives the unqualified mixed BOX asymptotic and primitive PARALLEL bound at real auxiliary scales, $w\le C_0\log\log X$, whole-domain positive arguments and cardinalities at least $R^{10r}$. Its parallel factor contains only primes $p>w$ dividing the true offset differences, and its constant $C_r$ is independent of $k,C_0$ and offsets.

[F2] [[def-w-trick-prime-modulus]], [[def-goldston-yildirim-truncated-divisor-sum]], [[def-number-theoretic-mobius-function]], [[def-divisor-counting-function]] and [[def-unit-group-modulo-n-and-euler-totient]] give $W$, the finite divisor square, $|\mu|\le1$, the ordinary divisor count $d(z)$ and $0<\varphi(W)\le W$.

[F3] The OWN134 supplier [[lem-goldston-yildirim-divisor-function-maximal-order-bound]] gives, for every $\eta>0$, a constant $C_\eta$ with $d(z)\le C_\eta z^\eta$ for ALL positive integers $z$.

[F4] [[thm-canonical-prime-factorisation]] supplies the finite prime and squarefree-divisor expansions. [[thm-standard-representatives-modulo-n]] gives standard representatives; at odd $P$ they give unique balanced representatives $t_P(h)$ with $|t_P(h)|<P/2$. [[thm-z-mod-p-is-a-field]] gives inverses, and [[thm-chinese-remainder-theorem]] identifies finite simultaneous prime residue classes.

[F5] [[def-factorial-and-falling-factorial]] gives $k!$; [[lem-integer-part]] supplies floors and ceilings; [[lem-finite-set-has-max]] gives extrema of explicit finite lists.

[F6] [[def-linear-forms-condition-for-a-measure]] includes nonnegative mean $1+o(1)$ and all rational nonparallel tests. [[def-correlation-condition-for-a-measure]] uses a PRODUCT over pairs, permits repeated shifts and requires one family with EVERY fixed positive integer moment bounded. [[def-k-pseudorandom-measure]] is their exact conjunction at the displayed parameter tuple.

[F7] [[thm-holder-finite-real-exponents]] gives Hölder for finite real families and conjugate exponents, including zero bases. Dividing finite sums by their cardinalities gives the same inequality for normalized finite averages.

[F8] [[thm-chebyshev-theta-linear-bounds]] supplies fixed positive $c_\theta<C_\theta$ with $c_\theta y\le\theta(y)\le C_\theta y$ for large $y$; [[def-chebyshev-theta-function]] defines $\theta(y)=\sum_{p\le y}\log p$.

[F9] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-power]], [[thm-real-power-laws]] and [[thm-logarithm-slower-than-every-positive-power]] give logarithms, positive powers and their asymptotic comparisons.

[F10] [[thm-p-series-rational]] gives convergence at $3/2$; [[lem-exponential-dominates-one-plus-x]] gives $1+x\le e^x$.

[F11] [[def-w-tricked-von-mangoldt-function]] gives the prime-only logarithmic weight for every reduced residue, at arguments greater than1. [[def-prime-progression-discrepancy]] specifies the full prime-power Mangoldt weight and integral endpoints; [[def-prime]] gives the two positive divisors of a prime.

[F12] Finite-data notation for the supplied integer affine system: write $\psi_i(x)=\sum_j a_{ij}x_j+\beta_i$, with integer coefficients and constants. The size notation in the Statement means $\|\Psi\|_X=\sum_{i,j}|a_{ij}|+X^{-1}\sum_i|\beta_i|$. This explicit finite formula is a notation convention for the already supplied data, not an additional hypothesis or a theorem about prime patterns.

## Proof

1.1 Since $\log W=\theta(w)$, [F8] gives $W\le(\log P)^{D_0}$ eventually, $D_0=C_\theta C_0$, hence $W=P^{o(1)}$ and $W\le P/2$. Fix once a real $D_\theta>\max(2,2C_\theta/c_\theta)$. For every sufficiently large real $Y$, $\theta(D_\theta Y)-\theta(Y)>0$, so the finite prime sum contains a prime in $(Y,D_\theta Y]$. Its least prime is uniquely determined by a finite ordered list. This provides canonical bounded prime selection, without choosing an infinite family of witnesses. Both arguments use only the theta inequalities and so also apply with any other real auxiliary scale in place of $P$. [F2, F4, F5, F8, F9, given, algebra]

1.2 For $D$ nonnegative functions on a nonempty finite set, [F7] implies $\mathbb E\prod_{i=1}^Df_i\le\prod_i(\mathbb Ef_i^D)^{1/D}$. The case $D=1$ is equality. For $D\ge2$, apply conjugate exponents $D/(D-1),D$ to the first $D-1$ factors' product and the last, and apply the induction hypothesis to the first factors raised to $D/(D-1)$. Their resulting powers are $D$, proving the assertion. The same two-factor inequality with the second function1 gives monotonicity of normalized finite power means. These derivations use finite sums only, with no measure-space Hölder or choice premise. [F7, F9, algebra]

1.3 Empty $I$ gives $\nu_b=1$ and conditional prime sumzero. An empty list requires no domination and can return measure1. Hence consider nonempty $I$ and $T\ge1$. Put $Q=\lfloor\sqrt P\rfloor$ and partition each integer coordinate by endpoints $\lfloor uP/Q\rfloor$, $0\le u\le Q$. For integer forms with nonzero rows bounded by $A_k=kk!$ in $s\le3k-4$ variables, oscillation on a box is at most $V=sA_k\lceil P/Q\rceil\le2sA_k\sqrt P$ for large $P$. The margins imply $A-V>0$, $B+V<P$ and $V<P-(B-A)$. Thus an active form meets exactly one translated $I+rP$, and its unique lift lies in $[A-V,B+V]\subset(0,P)$ throughout the WHOLE box, equal to its standard representative even outside $I$. If a box crosses $A+rP$ or $B+1+rP$, its lower-left value is within $V+1$ of that level. Fix a least nonzero coefficient coordinate and all other box indices. Replacing its floor by $uP/Q$ costs at most $A_k$, so each fixed level allows $O_k(1)$ indices. Its whole range has length at most $A_kP$, permitting only $O_k(1)$ levels, independently of the affine translate or endpoints. Sum over the other $Q^{s-1}$ indices, two boundaries and the finitely many forms. There are $O_k(Q^{s-1})$ bad boxes, with total exact mass at most $O_k(Q^{s-1})\lceil P/Q\rceil^s/P^s=O_k(1/Q)$. [F4, F5, given, algebra]

1.4 For distinct cyclic shifts and a nonempty supported subset of size $r$, anchor its first representative $y\in I$. Differences of the other representatives from it are uniquely determined integers $u_j\in[-(B-A),B-A]$ in the required residue classes, because $2(B-A)<P$. If no such integers or common support exist the term iszero. Otherwise $J=I\cap\bigcap_j(I-u_j)$ is its exact support, and a common point gives $\max u_j-\min u_j\le B-A$. Reanchor at the least $u_j$, unique for distinct shifts. The resulting $v_j=u_j-\min u_j$ satisfy $0\le v_j\le B-A$, and $v_i-v_j=t_P(h_i-h_j)$ exactly. The anchor is a standard representative in $I$, and the new support is precisely $J_{\min}=I\cap\bigcap_j(I-v_j)$. This is an exact finite representative identity, with no period assertion. [F2, F4, F5, given, algebra]

2.1 For an allowed rational LF system, the FIELD bijection $x_j=k!y_j$, at primes $P>k!$, clears every bounded denominator and gives nonzero pairwise nonparallel integer rows bounded by $A_k$. These are eventually at most $\sqrt w/2$ since $w\to\infty$. Each coordinate box has at least $\sqrt P/2$ points, which exceeds $R^{10r}$ for every subfamily of $r\le k2^{k-1}$ forms, because $10r/(k2^{k+4})\le5/16<1/2$. For ANY independent progression residues $\gamma_i$ chosen from the list, the active whole-box lifts in step 1.3 have $W\psi_i+\gamma_i>0$. On good boxes, their product of $\nu_{\gamma_i}$ values is the normalized divisor-square product over the active subfamily, with average $1+o(1)$ by [F1], or exactly1 for an empty subfamily. On bad boxes use $\nu_{\gamma_i}\le1+c\Lambda_R(W\psi_i+\gamma_i)^2$ for active forms, expand the subfamilies and apply the same positive mixed BOX estimate to obtain $O_k(1)$. Exact box weights and nonnegativity give the global mixed average $1+o(1)$. Uniformity in residues/constants is supplied by [F1]; the finite set of allowed rational arrays permits a finite maximum of their errors. No divisor-sum period or fixed-epsilon geometry is assumed. [F1, F2, F4, F5, F6, F9, step 1.1, step 1.3, algebra]

2.2 On actual support arguments $1\le Wn+b\le W(P+1)\le P^2$ eventually. From $|\mu|\le1$, $|\Lambda_R(z)|\le d(z)\log R$ and $\varphi(W)\le W$, $$M_P:=\max(1,\max_x\overline\nu(x))\le1+(\log R)\max_{z\le P^2}d(z)^2\le1+C_\eta^2(\log R)P^{4\eta}$$ for every fixed $\eta>0$. Hence $M_P=P^{o(1)}$, uniformly in all residues and lists, and $M_P^{mq}/P=o(1)$ for each fixed $m,q$. All maxima are finite indexed extrema; this uses the ordinary-divisor supplier [F3], not canonical58. [F2, F3, F5, F9, step 1.1, algebra]

2.3 For independent assigned residues $\gamma_j$, the supported subset average is $$\frac{c^r}{P}\sum_{y\in J_{\min}}\prod_j\Lambda_R(W(y+v_j)+\gamma_j)^2.$$ Enlarge $J_{\min}$ to $[A,A+P-1]\cap\mathbb Z$ by nonnegativity. Every argument remains positive since $y\ge A>0$, $v_j\ge0$. The actual offsets $a_j=Wv_j+\gamma_j$ are units modulo $W$, are distinct because $|\gamma_i-\gamma_j|<W$, and satisfy $0<a_j\le W(P+1)\le P^2$. Also $P\ge R^{10r}$ for $r\le2^{k-1}$, since $10r/(k2^{k+4})\le5/(16k)<1$. Thus the PARALLEL clause [F1] applies literally to $Wy+a_j$ on this length-$P$ interval. Its normalizing factor cancels $c^r$ and its uniform error is eventually at most1, giving twice its true exceptional-prime product. No huge independent CRT offsets are substituted for these genuine small $a_j$. [F1, F2, F4, F9, step 1.1, step 1.4, algebra]

2.4 Fix $2\le m\le2^{k-1}$ and choose $C_m$ at least the finitely many constants of [F1] for orders $r\le m$. For nonzero balanced $t$ and list indices $u,v$ define $$F_{u,v}(t)=\prod_{\substack{p>w\\p\mid|Wt+b_u-b_v|}}(1+C_mp^{-1/2}).$$ The integer inside the absolute value is nonzero, since $|Wt|\ge W>|b_u-b_v|$. Fix a positive integer $Q_0$ and set $B_{m,Q_0}=\sum_{j=1}^{Q_0}\binom{Q_0}j C_m^j$. Finite binomial and squarefree-divisor expansion bound $F_{u,v}(t)^{Q_0}$ by $\sum_{d\mid|Wt+b_u-b_v|,\ d\text{ squarefree},\ p\mid d\Rightarrow p>w}B_{m,Q_0}^{\omega(d)}d^{-1/2}$. Each such $d$ is coprime to $W$. The congruence $Wt+b_u-b_v=0\pmod d$ has exactly one residue class by [F4], so among the full $P$ balanced integers it occurs at most $P/d+1$ times; deleting zero only decreases this number. Put $Z=W(P+1)$. Finite reordering consequently gives $$\frac1P\sum_{h\ne0}F_{u,v}(t_P(h))^{Q_0}\le\sum_{\substack{d\le Z\\d\text{ squarefree}}}B_{m,Q_0}^{\omega(d)}d^{-3/2}+\frac1P\sum_{\substack{d\le Z\\d\text{ squarefree}}}B_{m,Q_0}^{\omega(d)}d^{-1/2}.$$ The $+1$ term is retained; it is not replaced by $2P/d$ beyond $d>P$. [F1, F4, F9, step 1.1, algebra]

2.5 For $n\in I$, $z=Wn+b\ge A\ge M_k\sqrt P>R$ and $z\le W(P+1)\le P^2$ eventually. If $z$ is prime, [F2] and [F11] give $\Lambda_R(z)=\log R$, since its only divisor at most $R$ is1 and $\mu(1)=1$. Therefore $$\nu_b(n)=\frac{\varphi(W)}W\log R\ge\frac{1}{k2^{k+5}}\frac{\varphi(W)}W\log z=\frac{\widetilde\Lambda_{b,W}(n)}{k2^{k+5}}.$$ A nonprime has zero right side. The common measure is at least $\nu_{b_j}/T$, proving the exact stated list constant. The weight is used only on $I$, where its argument is greater than1. [F2, F9, F11, step 1.1, algebra]

2.6 For the conditional normalization ONLY, assume the complete displayed SW estimate. Choose fixed exponents $a_0>D_0+1$, $b_0>D_0+3$. Put $x_0=W(A-1)+b$, $x_1=WB+b$. They are the preceding and final class-$b$ points; subtracting their full-weight sums selects EXACTLY $A\le n\le B$, and $x_1-x_0=W|I|$. The endpoints lie between a constant times $W\sqrt P$ and $W(P+1)$, so their logarithms are bounded above and below by fixed positive multiples of $\log P$. Consequently $W\le(\log x_i)^{a_0}$ eventually. Apply the GIVEN estimate at these two endpoints to obtain $\sum_{n\in I}\Lambda(Wn+b)=W|I|/\varphi(W)+O(WP(\log P)^{-b_0})$. Proper prime powers cost $O(\sqrt{WP}(\log P)^2)$ by counting their bases, exponents and weights. Multiplying by $\varphi(W)/(WP)$ gives $$P^{-1}\sum_{n\in I}\widetilde\Lambda_{b,W}(n)=|I|/P+O\left(W(\log P)^{-b_0}+\sqrt{W/P}(\log P)^2\right)=|I|/P+o(1).$$ Uniformity includes all residues and windows. No theorem supplying SW is invoked without its axioms; this is exactly the implication from the explicit additional hypothesis. [F2, F8, F9, F11, step 1.1, given, algebra]

2.7 At the original arbitrary real scale $X$, the cutoff $w\le\tfrac12\log\log X$ and [F8] give $W\le(\log X)^{C_\theta/2}=X^{o(1)}$. With the stated $B_X$, step 1.1's prime selection gives $8B_X<P_X\le8D_\theta B_X$, hence $P_X\asymp_{L_0}X/W$ and $\log P_X\sim\log X$. Thus $w\le\log\log P_X$ eventually. Also $A_X/\sqrt{P_X}\asymp_{L_0}X^{1/5}/\sqrt W\to\infty$, $B_X<P_X/8$ and $P_X-B_X>7P_X/8$. The window is therefore admissible with $C_0=1$, $\rho=1/4$ for every fixed $k$, retaining the FULL original cutoff range rather than replacing it by a slow subrange. [F2, F5, F8, F9, step 1.1, algebra]

3.1 Expand $\prod_i\overline\nu(\psi_i)$ as the normalized finite sum over its $T^r$ indexed residue assignments. The error in step 2.1 is uniform over ALL assignments, so averaging preserves that bound even if $T$ varies or list entries repeat. Thus every full LF test holds for $\overline\nu$. Its one-form test gives mean $1+o(1)$; its nonnegativity is immediate. Individual $\nu_b$ are included by $T=1$. [F2, F6, step 2.1, algebra]

3.2 The first sum in step 2.4 is at most the FINITE prime product $\prod_{p\le Z}(1+B_{m,Q_0}p^{-3/2})\le\exp(B_{m,Q_0}\sum_{n\ge2}n^{-3/2})$, uniformly in the residue pair. For the second sum choose an integer $a\ge1$ with $2^a\ge B_{m,Q_0}$. For squarefree $d$, $B_{m,Q_0}^{\omega(d)}\le d(d)^a\le C_\eta d^\eta$ for every $d\ge1$ by [F3], using its consequence with exponent $\eta/a$. Take $\eta=1/8$. Dyadic blocks $(2^{-j-1}Z,2^{-j}Z]$ bound $\sum_{d\le Z}d^{-3/8}\le C Z^{5/8}$: each nonempty block contributes at most $C Z^{5/8}2^{-5j/8}$, whose finite geometric sum is bounded. Thus the second sum is at most $$C_{m,Q_0}P^{-1}Z^{5/8}\le C_{m,Q_0}P^{-3/8}(\log P)^{5D_0/8}=o(1).$$ The bound is uniform in $b_u-b_v$, $w$ and the entire list. Only primes $p>w$ entered the congruences, so no prime dividing $W$ can create a constant divisor at every $t$. [F3, F4, F9, F10, step 1.1, step 2.4, algebra]

3.3 The size Definition gives $|\psi_i(x)|\le L_0X$ for $x\in[-X,X]^d$. For each stated residue vector $a$, affine arithmetic makes $\widetilde\psi_{i,a}$ integer-valued, and $Wn+a\in K$ gives $$X^{7/10}/W-1\le\widetilde\psi_{i,a}(n)\le L_0X/W,$$ hence membership in $I_X$ for large $X$. The algorithm's $\Phi(W)$ equals $\varphi(W)$, both counting the same unit classes, and its prime-only weight equals [F11]'s weight on these positive outputs. Integer parameters lie coordinatewise in $[-X/W-1,X/W]$, of diameter less than $P_X$, so reduction is injective there; field affine evaluation is the reduction of the integer evaluation, whose positive output already is its standard representative in $I_X$. These facts identify the auxiliary field explicitly and do not assert that $X$ is prime or a divisor sum has period $P_X$. [F2, F4, F9, F11, F12, step 2.7, algebra]

3.4 Every prescribed $w(P)\to\infty$ with $w\log w=o(\log\log\log P)$ is eventually below $\log\log P$, so it is in the new range. Its original $\epsilon_k$ window satisfies all margins and has width less than $P/4$. For $T=1$, the exact coefficient in step 2.5 is the original one. A prescribed nondecreasing plateau with left endpoints $P_j\to\infty$ and values $w_j\to\infty$, satisfying $w_j\log w_j=o(\log\log\log P_j)$, remains slow throughout $[P_j,P_{j+1})$: its numerator is constant while the denominator increases. If the aligned data have $P_j\asymp Y_j/(\epsilon_kW_j)$ and $w_j=\max(2,\lfloor(\log\log\log Y_j)^{1/3}\rfloor)$, then $\log W_j\le w_j\log w_j=o(\log\log\log Y_j)$, so $\log P_j/\log Y_j\to1$ and $\log\log\log P_j\sim\log\log\log Y_j$, proving that left-endpoint condition; choosing increasing $Y_j,w_j$ gives the prescribed nondecreasing branch. This verifies the cutoff interface only, not the existence/density/transfer argument of any prime-pattern consumer. [F2, F5, F6, F9, step 1.1, step 2.5, algebra]

3.5 Write $\overline g=T^{-1}\sum_jc\Lambda_R(Wn+b_j)^2\mathbf1_I$, so $\overline\nu\le1+\overline g$. For distinct $h_i$, expand its $2^m$ subsets and their finite residue assignments. Step 2.3 bounds every nonempty subset by twice its exceptional product. Each offset difference equals $W t_P(h_i-h_l)+b_{j_i}-b_{j_l}$. Add the missing pairs, whose $F$ factors are at least1, and average dummy residue indices. The empty subset also obeys this bound. Hence the full average is at most $2^{m+1}\mathbb E_{j_1,\ldots,j_m}\prod_{i<l}F_{j_i,j_l}(t_P(h_i-h_l))$. Put $D=\binom m2\ge1$. Apply the finite $D$-factor inequality of step 1.2 on $[T]^m$; a pair's $D$th-power average reduces exactly to the average over its two indices. Define $$\tau_m(h)=2^{m+1}\left(\mathbb E_{u,v\in[T]}F_{u,v}(t_P(h))^D\right)^{1/D}\quad(h\ne0),\qquad\tau_m(0)=M_P^m.$$ Putting the constant on EACH pair dominates the single $2^{m+1}$ because $D\ge1$. This proves the required PRODUCT bound for distinct shifts. If shifts repeat, one equal pair contributes $M_P^m$, which already bounds the whole left side, and every other factor is at least1. Thus repeated shifts are included. The same family is fixed before any moment order is chosen. [F2, F4, F6, F7, step 1.2, step 2.2, step 2.3, step 2.4, algebra]

4.1 For any fixed positive integer $q$, choose $Q_0=D\lceil\max(q,D)/D\rceil\ge q,D$. The finite power-mean inequality in step 1.2 and $F\ge1$ give $\left(\mathbb E_{u,v}F_{u,v}^D\right)^{q/D}\le\left(\mathbb E_{u,v}F_{u,v}^{Q_0}\right)^{q/Q_0}\le\mathbb E_{u,v}F_{u,v}^{Q_0}$. Exchange only finite sums and use step 3.2 to bound $P^{-1}\sum_{h\ne0}\tau_m(h)^q=O_{m,q}(1)$ uniformly even in $T$. The zero contribution is $M_P^{mq}/P=o(1)$ by step 2.2. Thus EVERY fixed moment is bounded for the ONE family constructed in step 3.5. Combining its PRODUCT bound with the separate nonnegative mean from step 3.1 gives exactly [F6]'s correlation condition; its LF result then gives $k$-pseudorandomness. No infinite-measure Hölder or unqualified use of a choice-dependent supplier occurs. [F5, F6, F7, F9, step 1.2, step 2.2, step 3.1, step 3.2, step 3.5, algebra]

5.1 Apply the prime-window results to the common indexed list $b_1(a),\ldots,b_t(a)$ on $F_{P_X}$, giving domination factor $1/(tk2^{k+5})$ and the stated uniform LF/correlation estimates, uniformly in every retained $a$. Choosing $k\ge\max(3,m_*,t_*+4,\lceil\ell_*\rceil,r_*)$ covers every ADMISSIBLE test in that finite budget. The interval $I_X$ has cardinality within fixed factors of $P_X$, since $A_X=o(B_X)$, so the one-form BOX estimate also gives mean $1+o(1)$ on $I_X$ if that interval normalization is needed. These are finite-test statements at the auxiliary primes, valid for every original scale; no composite quotient is called a field. A different masked/convex-region or uniformity test still needs its own supplier fit and is not inferred from LF. [F1, F4, F5, F6, F12, step 2.5, step 2.7, step 3.3, step 4.1, algebra]

6.1 All stated sieve conclusions follow from steps 3.1,4.1 and2.5, the additional given-estimate conclusion from step 2.6, and the original-scale and slow-cutoff applications from steps 5.1 and3.4. Empty cases were handled before division, and excluded finite early prime indices can use constant measure1 and weight1 without changing any asymptotic test. The required pair weights are fixed independently of every moment order, repeated shifts are included, the $P/d+1$ remainder was controlled, and all exceptional factors used only $p>w$ with genuine small offsets. No choice axiom, fixed-parameter theorem outside scope, arbitrary-order/unwrapped cyclic assertion, finite-density/Szemerédi or full prime-pattern theorem was used or supplied. [F6, step 1.3, step 2.5, step 2.6, step 3.1, step 3.4, step 4.1, step 5.1] ∎
