---
dependency_level: 2
id: lem-reduced-approximation-zero-one-law
kind: lemma
title: Zero–one law for reduced rational approximation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-countable-choice
- def-reduced-rational-approximation-limsup-set
- thm-lebesgue-density-theorem
- thm-lebesgue-measure-is-a-complete-measure
- thm-lebesgue-measure-of-a-box-of-every-kind
- thm-countable-union-of-null-is-null
- thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
- thm-lebesgue-measure-under-dilations-and-reflections
- thm-fundamental-theorem-of-arithmetic
- thm-canonical-prime-factorisation
- thm-euler-totient-product-formula
- thm-inclusion-exclusion
- thm-euclids-lemma
- lem-every-integer-above-one-has-a-prime-divisor
- thm-euclid-infinitude-of-primes
- thm-unit-criterion-modulo-n
- thm-standard-representatives-modulo-n
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice. For every finite-valued function $\psi:\mathbb N\to[0,\infty)$, the reduced rational-approximation limsup set $A(\psi)$ has Lebesgue measure either $0$ or $1$.

## Statement references

[Koukoulopoulos–Maynard, Lemma5.1, printed p.264 (statement); the proof below is reconstructed locally](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] Under Countable Choice, Lebesgue measure is complete, interval length computes measure, countable unions of null sets are null, and translations and nonzero dilations preserve measurability and scale length as stated in [[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-countable-union-of-null-is-null]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-under-dilations-and-reflections]].

[F2] Almost every point of a measurable set has density one in it, and almost every point outside has density zero ([[thm-lebesgue-density-theorem]]).

[F3] Unique factorization, totient products, finite inclusion–exclusion, prime divisors and Euclid's lemma hold, and primes are unbounded ([[thm-fundamental-theorem-of-arithmetic]], [[thm-canonical-prime-factorisation]], [[thm-euler-totient-product-formula]], [[thm-inclusion-exclusion]], [[thm-euclids-lemma]], [[lem-every-integer-above-one-has-a-prime-divisor]], [[thm-euclid-infinitude-of-primes]]).

[F4] Reduced events are finite unions about the coprime residue representatives, and their limsup is as stated in [[def-reduced-rational-approximation-limsup-set]], [[thm-unit-criterion-modulo-n]], [[thm-standard-representatives-modulo-n]].

## Proof

1.1 The limsup $W$ below denotes the set $A(\psi)$ of the Statement. Its finite numerator unions and countable limsup are measurable. Replacing closed intervals by open ones changes the limsup by at most the countable set of their endpoints; zero-radius events contribute only rational points. These are null by [F1]. Write $r_q=\psi(q)/q$. We first prove that if r_q does not tend to zero, W(psi) contains (0,1).
For q≥1 let omega(q) be its number of distinct prime divisors. Inclusion–exclusion over those primes gives, for every bounded real interval J of length L,
$$
\left|\#\{a\in J\cap\mathbb Z:\gcd(a,q)=1\} -\frac{L\varphi(q)}q\right|\le2\,2^{\omega(q)}. \tag{1}
$$
Indeed use the complementary form of finite inclusion–exclusion for the sets of integers in J divisible by each prime divisor of q. For a subset S of those primes, the intersection is divisibility by $d_S=\prod_{p\in S}p$; the number of these multiples differs from L/d_S by at most 2. There are exactly 2^omega(q) subsets. The main terms sum by finite distributivity to $L\prod_{p\mid q}(1-1/p)=L\varphi(q)/q$. This proves (1) directly, without a Möbius-function supplier or an asymptotic theorem about reduced residues.
We also have the uniform elementary bound
$$
\frac{\varphi(q)}{2^{\omega(q)}}\ge\sqrt{q/30}. \tag{2}
$$
For q=1 this is immediate. For q>1 use its prime factorization. For a prime power p^a exactly dividing q, the contribution to the quotient of the left side of (2) by sqrt(q) is
$$
p^{a/2-1}\frac{p-1}{2}.
$$
It increases with a. At a=1 this is at least 1 for p≥7 because (p-1)^2≥4p. Its possible factors below 1 at p=2,3,5 have product
$(1/(2\sqrt2))(1/\sqrt3)(2/\sqrt5)=1/\sqrt{30}$. Any subset of those factors has product at least their full product. This proves (2).
Now suppose r_q≥epsilon>0 along infinitely many q. Fix x in (0,1) and choose
$0<\eta<\min(\epsilon,x,1-x)$. The interval $J=(q(x-\eta),q(x+\eta))$ lies strictly between 0 and q and has length 2eta q. By (1), it contains a coprime numerator whenever
$$
2\eta\varphi(q)>2\,2^{\omega(q)},
$$
which holds for q>30/eta² by (2). Along the infinite subsequence, every sufficiently large q therefore supplies a reduced fraction a/q with |x-a/q|<eta<r_q. This proves x in W(psi). Hence the theorem is finished unless
$$
r_q\longrightarrow0. \tag{3}
$$ [given, F1, F2, F3, F4, algebra]

2.1 Let I_n be a sequence of open intervals on the real line whose lengths tend to zero, and let c≥1. Let cI_n be the interval with the same center and c times the length. Then
$$
\lambda\bigl(\limsup cI_n\setminus\limsup I_n\bigr)=0. \tag{4}
$$
Here is a direct proof. Put U_N=union_{n≥N} I_n. If x belongs to infinitely many cI_n, then for infinitely many n≥N, writing r_n for the radius of I_n, the interval I_n lies in the centered interval
$B(x,(c+1)r_n)$. Therefore
$$
\frac{\lambda(U_N\cap B(x,(c+1)r_n))} {\lambda(B(x,(c+1)r_n))}\ge\frac1{c+1}.
$$
These ball radii tend to zero. Almost every point outside the measurable set U_N has density zero in U_N, by the local Lebesgue density theorem. Consequently $\limsup cI_n\setminus U_N$ is null. The union of these null exceptions over N is null, and $\cap_N U_N=\limsup I_n$. This proves (4). The reverse inclusion of limsups is immediate, so their symmetric difference is null.
The same proof applies to circle arcs of radii tending to zero: for sufficiently small arcs use the circle metric and local real coordinates, in which small balls have length twice their radius. One may instead lift all centers periodically to the real line and apply the argument on each compact interval. Zero-radius intervals contribute only a countable set and can be omitted.
In particular, under (3), for any set D of allowed denominators, and any c>0, the circle limsup over reduced fractions with q in D satisfies
$$
W_D(c\psi)=W_D(\psi)\quad\text{modulo a null set}. \tag{5}
$$
For c≥1 enumerate the finitely many reduced numerator arcs at each successive q in D; (3) ensures the arc radii in this enumeration tend to zero. Apply (4). If c<1, apply the c≥1 result to cpsi with factor 1/c. This justifies (5), including arbitrary sparse restrictions on q.
From here through the completion of the argument work on the circle $\mathbb T=\mathbb R/\mathbb Z$ with its completed Lebesgue probability measure. In fact for q≥2 the circle and interval unions coincide on [0,1], even without (3). The reduced centers are closed under reflection a/q↦(q-a)/q. If an arc about a/q wraps across 0 and contains x near 1, then $(1-x)+a/q\le r_q$; the reflected center has ordinary distance $|(1-x)-a/q|\le(1-x)+a/q\le r_q$. Wrapping across 1 is symmetric. Ordinary inclusion implies circle inclusion in the other direction. Removing the single denominator q=1 does not change a limsup; replacing closed arcs by open ones only discards the countable endpoints already noted. The same reflection reasoning works for each restricted denominator set D. [given, F1, F2, F3, F4, algebra]

3.1 For each integer m≥2 the map $M_m(x)=mx\pmod1$ preserves completed Lebesgue probability. For a measurable E its inverse image is, apart from branch endpoints,
$$
M_m^{-1}E=\bigcup_{j=0}^{m-1}(E+j)/m.
$$
These pieces lie in the m disjoint half-open cells of length 1/m. Translation invariance and dilation of Lebesgue measure give their total measure lambda(E). The same argument handles null sets in the completion.
If a measurable E satisfies $E=M_m^{-1}E$ modulo a null set, then induction and measure preservation give $E=M_m^{-n}E$ modulo null sets for every n. On
$I_{n,j}=[j/m^n,(j+1)/m^n)$, the nth iterate is x↦m^n x-j. Thus
$$
\lambda(E\cap I_{n,j})=m^{-n}\lambda(E). \tag{6}
$$
If lambda(E)>0, choose an interior density-one point x of E. Its depth-n cell is contained in B(x,m^-n), except for a null endpoint. By density,
$$
\frac{\lambda(I_{n,j(n)}\setminus E)}{m^{-n}} \le2\frac{\lambda(B(x,m^{-n})\setminus E)}{2m^{-n}} \longrightarrow0.
$$
But (6) makes the left side equal 1-lambda(E), so lambda(E)=1. This proves the zero–one conclusion for essentially invariant sets, without assuming exact invariance or appealing to an external ergodic theorem.
The affine map $T_{m,b}(x)=mx+b\pmod1$ has the same two properties. Indeed if $R_c(x)=x+c$ and c=b/(m-1), then
$$
T_{m,b}=R_{-c}\circ M_m\circ R_c.
$$
Circle rotations preserve measure, so this is a measure-preserving conjugacy. An essentially T-invariant set rotates to an essentially M-invariant set, and hence has measure zero or one.
A useful consequence is the following: if T is either of these maps, E is measurable, F contains E with lambda(F\E)=0, and
$E\subseteq T^{-1}F$, then E is essentially T-invariant. Indeed
$$
E\setminus T^{-1}E\subseteq T^{-1}(F\setminus E)
$$
is null by preservation; also lambda(T^-1 E)=lambda(E), forcing the other set difference to be null. The preceding zero–one conclusion therefore applies. [given, F1, F2, F3, F4, algebra]

4.1 Fix an arbitrary prime p. Split the circle approximation limsup into three measurable sets:
A_p: infinitely many approximations with p not dividing q;
B_p: infinitely many approximations with p exactly dividing q;
C_p: infinitely many approximations with p² dividing q.
These exhaust the limsup, because infinitely many denominators in a union of three classes imply infinitely many in one class. The following transformations preserve the reduced numerator condition, with no change of denominator:
Class A_p. If gcd(a,q)=1 and p does not divide q, then gcd(pa,q)=1. The circle map M_p sends the center a/q to the reduced center pa/q modulo 1, and multiplies approximation error by at most p. Hence
$$
A_p(\psi)\subseteq M_p^{-1}A_p(p\psi). \tag{7}
$$
Class B_p. Write q=pn with p not dividing n. Use
$$
T_p(x)=px+1/p\pmod1.
$$
It sends the center a/q to
$$
\frac{pa+n}{q}\pmod1.
$$
This numerator is coprime to q: modulo p it is n, which is nonzero; if a different prime ell divides q, then ell divides n, so the numerator is congruent to pa modulo ell, also nonzero since both p and a are units modulo ell. These checks cover every prime divisor of q, irrespective of its exponent. The map multiplies error by at most p and preserves this denominator class, giving
$$
B_p(\psi)\subseteq T_p^{-1}B_p(p\psi). \tag{8}
$$
Class C_p. If p² divides q, then q/p is divisible by every prime divisor of q. Thus gcd(a+q/p,q)=1 if and only if gcd(a,q)=1; the same is true with a-q/p. Translation by 1/p therefore permutes the reduced centers of each such q and preserves their radii. Consequently
$$
C_p(\psi)+1/p=C_p(\psi) \tag{9}
$$
as circle sets, exactly. No scaling is used for (9).
By (5), the enlarged right-hand sets in (7) and (8) differ from their original sets by null sets. Applying step 3.1 shows
$$
\lambda(A_p),\ \lambda(B_p)\in\{0,1\} \quad\text{for every prime p}. \tag{10}
$$
The affine map in (8) is essential: simply multiplying by p when p exactly divides q makes pa/q nonreduced and does not prove this law. [given, F1, F2, F3, F4, algebra]

5.1 Let W denote the circle limsup. If any A_p or B_p has measure 1, then W has measure 1 and the theorem is proved. Otherwise (10) says all these sets are null. For every prime p, the decomposition W=A_p∪B_p∪C_p then implies
$$
W=C_p\quad\text{modulo a null set}.
$$
Equation (9), and invariance of null sets under translation, yield
$$
W+1/p=W\quad\text{modulo a null set for every prime p}. \tag{11}
$$
For each fixed p, iterate (11) finitely many times. All p cells $[j/p,(j+1)/p)$ have the same W-mass; summing their masses shows it is lambda(W)/p. If lambda(W)>0, choose an interior density-one point x of W. There are arbitrarily large primes by Euclid's elementary argument. For such p, take the length-1/p cell I_p containing x. As in step 3.1,
$$
1-\lambda(W)=p\lambda(I_p\setminus W) \le2\frac{\lambda(B(x,1/p)\setminus W)}{2/p} \longrightarrow0.
$$
Hence lambda(W)=1. If lambda(W)=0 there is nothing to prove. Finally step 2.1 identifies this measure with that of the interval limsup in the theorem, while step 1.1 already handled the nonshrinking case. This proves the full reduced-approximation zero–one law for arbitrary psi. [given, F1, F2, F3, F4, algebra] ∎
