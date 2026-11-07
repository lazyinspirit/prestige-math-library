---
id: lem-primitive-khintchine-groshev-zero-one-law
kind: lemma
title: "Zero-one law for primitive Khintchine–Groshev approximation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-khintchine-groshev-matrix-approximation-set
  - def-gcd-of-finite-integer-tuple
  - def-primitive-linear-form-approximation-condition
  - thm-fundamental-theorem-of-arithmetic
  - cor-euclids-lemma-for-finite-products
  - thm-lebesgue-density-theorem
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-constant-scaling-limsup-neighborhoods-preserves-measure
  - lem-expanding-torus-map-invariant-set-has-zero-or-full-measure
  - lem-large-box-contains-primitive-integer-offset
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, A note on zero-one laws in metrical Diophantine approximation, Theorem 1 and §§2–3"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, let $\Psi:\mathbb Z^n\setminus\{0\}\to[0,\infty)$, and equip $Q=[0,1)^{n\times m}$ with normalized Lebesgue measure. Define

$$A'_{n,m}(\Psi):=\left\{X\in Q:\ \|qX+p\|_\infty<\Psi(q)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\text{ with }\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)=1\right\}.$$

Then $|A'_{n,m}(\Psi)|\in\{0,1\}$. The same measure conclusion holds if the set is defined on the closed cube $[0,1]^{n\times m}$, since the two versions differ only on the boundary of that cube.

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, Theorem 1 and §§2–3](https://arxiv.org/pdf/0803.2355v1)

## Facts & Assumptions

**Given:** Countable Choice, the matrix and tuple-gcd conventions, a nonnegative vector-dependent gauge, and normalized Lebesgue measure on the unit matrix cube.

[A1] Countable Choice makes the Lebesgue measure on the cube countably additive. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] A measurable set has density $1$ at almost every one of its points; positive finite-tuple gcd and prime-factor conventions are as stated in the local definitions. ([[thm-lebesgue-density-theorem]], [[def-gcd-of-finite-integer-tuple]], [[def-primitive-linear-form-approximation-condition]])

[F2] If a prime divides a finite product, it divides one of its factors. ([[cor-euclids-lemma-for-finite-products]])

[F3] A joint integer tuple is primitive exactly when its tuple gcd is $1$; every positive integer common divisor $d>1$ has a prime divisor by the fundamental theorem of arithmetic. ([[def-gcd-of-finite-integer-tuple]], [[def-primitive-linear-form-approximation-condition]], [[thm-fundamental-theorem-of-arithmetic]])

[F4] Constant scaling of the radii of a limsup of neighborhoods preserves its measure. ([[lem-constant-scaling-limsup-neighborhoods-preserves-measure]])

[F5] A measurable set forward invariant under $x\mapsto\ell x+s/\ell$ on a normalized torus has measure $0$ or $1$. ([[lem-expanding-torus-map-invariant-set-has-zero-or-full-measure]])

[F6] Every sufficiently large integer-coordinate box of side proportional to $H$ contains an offset $p$ with $\gcd(H,p_1,\ldots,p_m)=1$, uniformly in its center. ([[lem-large-box-contains-primitive-integer-offset]])

[F7] Products of half-open intervals have measure equal to the product of their side lengths. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F8] Lebesgue measure is translation invariant and Fubini's theorem applies to the finite product cubes used here. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F9] Euclidean balls have positive finite measure, and dilation scales their measure by the $nm$th power. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-measure-under-dilations-and-reflections]])

## Proof




1.1 For fixed $q,p$, the inequality region is relatively open in $Q$, and the primitive-pair index set is countable. For each fixed $q$, only finitely many $p$ can satisfy the inequality at any point of the bounded cube. Hence $A'_{n,m}(\Psi)$ is the countable limsup over unbounded $\|q\|_\infty$ of these open regions and is measurable. The boundary of the closed cube is contained in finitely many coordinate slabs of arbitrarily small total volume by [F7], so it has measure zero. [given, A1, F7, algebra]

1.2 Put $A':=A'_{n,m}(\Psi)$ and $F':=\bigcup_{k=1}^{\infty}A'_{n,m}(k\Psi)$. If $\Psi(q)/\|q\|_\infty\not\to0$, choose $\varepsilon>0$ and a sequence $q$ with $h:=\|q\|_\infty\to\infty$ and $\Psi(q)\ge\varepsilon h$. Put $d:=\gcd(q_1,\ldots,q_n)$. Since $d$ divides every $q_i$ and every common divisor of the $q_i$ divides $d$, the common divisors of $(q_1,\ldots,q_n,p_1,\ldots,p_m)$ are exactly those of $(d,p_1,\ldots,p_m)$. If $d$ is at least the threshold in [F6], apply [F6] to the offset box centered at $-qX$ with denominator $d$; the resulting $p$ has joint gcd $1$ and $\|qX+p\|_\infty<\varepsilon d\le\Psi(q)$. If $d$ is below that fixed threshold, choose $p_1$ in the residue class $1\bmod d$ within distance less than $d$ of $-(qX)_1$ and choose nearest integer offsets in the other coordinates; for $d=1$ choose nearest integers in every coordinate. This gives a primitive offset with error less than $d$, which is below $\varepsilon h$ for all sufficiently large rows in the sequence. Thus every $X\in Q$ belongs to $A'$. [given, F1, F3, F6, construct, algebra]

1.3 Now assume $\Psi(q)/\|q\|_\infty\to0$ as $\|q\|_\infty\to\infty$. Let $K=[-1,2]^{nm}$, use Euclidean distance on the matrix space (the Frobenius norm), and for each primitive pair $(q,p)$ with $\Psi(q)>0$ and $P_{q,p}:=\{Y\in\mathbb R^{n\times m}:qY+p=0\}$ meeting $K$, put $\displaystyle S_{q,p}:=P_{q,p}\cap K,\qquad r_q:=\frac{\Psi(q)}{\|q\|_\infty},\qquad G_c:=\limsup_{(q,p)}\Delta(S_{q,p},c r_q),$ where $\Delta(S,r):=\{Y\in\mathbb R^{nm}:\operatorname{dist}_2(Y,S)<r\}$ and the limsup is taken along an enumeration by increasing $\|q\|_\infty$; there are finitely many relevant offsets $p$ at each bounded row norm. There are only finitely many such $p$ for each bounded set of rows $q$, and $r_q\to0$ as $\|q\|_\infty\to\infty$, so these sets can be enumerated with radii tending to zero. The affine subspace $P_{q,p}$ is nonempty; orthogonal projection column by column gives $\displaystyle \operatorname{dist}_2(X,P_{q,p})=\frac{\|qX+p\|_2}{\|q\|_2}.$ Since $\|v\|_\infty\le\|v\|_2\le\sqrt m\|v\|_\infty$ and $\|q\|_\infty\le\|q\|_2\le\sqrt n\|q\|_\infty$, any approximation with error below $a\Psi(q)$ lies within distance $\sqrt m\,a r_q$ of $P_{q,p}$. Conversely, distance below $c r_q$ implies error $\|qX+p\|_\infty<\sqrt n\,c\Psi(q)$. For all sufficiently large rows, any such nearby point of $P_{q,p}$ lies in $K$. Therefore, up to the finite initial rows, $\displaystyle A'_{n,m}(a\Psi)\subseteq G_{\sqrt m a}\cap Q,\qquad G_c\cap Q\subseteq A'_{n,m}(\sqrt n c\,\Psi).$ The scaling lemma [F4] gives the same measure to every $G_c$; since these limsup sets are nested in $c$, their differences are null. Hence $\displaystyle |A'|=|G_1|=|F'|.$ Indeed, $G_{1/\sqrt n}\cap Q\subseteq A'\subseteq G_{\sqrt m}\cap Q$, while $G_1\cap Q\subseteq A'_{n,m}(k\Psi)\subseteq F'$ for any integer $k\ge\sqrt n$, and $F'\subseteq\bigcup_{j\ge1}(G_{\sqrt m j}\cap Q)$; the last union has measure $|G_1|$ by continuity from below. [given, A1, F4, algebra, algebra]

1.4 Fix a prime $\ell$. For $i=0,1,2$, let $S_i(\ell)$ consist of the points $X\in F'$ for which, for some integer constant $k\ge1$, infinitely many primitive approximating pairs satisfy $\|qX+p\|_\infty<k\Psi(q)$ and respectively $\displaystyle \ell\nmid d(q),\qquad \ell\mid d(q),\ \ell^2\nmid d(q),\qquad \ell^2\mid d(q),\quad d(q):=\gcd(q_1,\ldots,q_n).$ These three conditions partition every pair, so $F'=S_0(\ell)\cup S_1(\ell)\cup S_2(\ell)$. If $X\in S_0(\ell)$, map it to $X'=\ell X\pmod1$. For an integer correction matrix $Z$ with $X'=\ell X-Z$, put $p'=\ell p+qZ$. Then $qX'+p'=\ell(qX+p)$. If a prime divided all coordinates of $q$ and $p'$, it could not be $\ell$ because $\ell\nmid d(q)$. For any other such prime $r$, $r$ divides every entry of $qZ$ and every coordinate of $p'$, so $r\mid\ell p_a$ for every form coordinate $a$; [F2] gives $r\mid p_a$, contradicting [F3]. Thus $X'\in S_0(\ell)$, and [F5] gives $|S_0(\ell)|\in\{0,1\}$. [given, F2, F3, F5, algebra]

1.5 The set $S_1(\ell)$ is the finite union over $j=1,\ldots,n$ of the subsets $S_{1,j}(\ell)$ where in addition $\ell\mid q_j$ and $\ell^2\nmid q_j$. Let $J_j$ be the integer $n\times m$ matrix whose $j$th row consists of ones and whose other rows are zero. Map $X$ to $X'=\ell X+J_j/\ell\pmod1$. For an integer correction matrix $Z$, set $p'=\ell p-qJ_j/\ell+qZ$; then $qX'+p'=\ell(qX+p)$. If a prime $r$ divides all coordinates of $q$ and $p'$, then for $r=\ell$ the residue of every coordinate of $p'$ modulo $\ell$ is $-q_j/\ell\not\equiv0$, a contradiction. If $r\ne\ell$, [F2] gives $r\mid q_j/\ell$; also $r$ divides every entry of $qZ$, so $r\mid p'_a$ forces $r\mid p_a$ for every form coordinate $a$, again contradicting [F3]. Thus $S_{1,j}(\ell)$ is forward invariant under this expanding affine torus map; [F5] gives its measure as $0$ or $1$. A finite union of such sets also has measure $0$ or $1$, so $|S_1(\ell)|\in\{0,1\}$. [given, F2, F3, F5, algebra, algebra]

1.6 In the latter case, fix a prime $\ell$ and an integer matrix $R\in\mathbb Z^{n\times m}$. For $X\in S_2(\ell)$ map $X$ to $X'=X+R/\ell\pmod1$. For every approximating row in $S_2(\ell)$, all coordinates of $q$ are divisible by $\ell^2$, so $qR/\ell$ is an integer matrix with every entry divisible by $\ell$. With an integer correction matrix $Z$, the offset $p'=p-qR/\ell+qZ$ preserves the error exactly. If a prime $r$ divides all coordinates of $q$ and $p'$, then it divides every coordinate of $qR/\ell$: for $r=\ell$ this follows from $\ell^2\mid q_i$, and for $r\ne\ell$ it follows from [F2]. Since $r$ also divides $qZ$, it then divides every coordinate of $p$, contradicting [F3]. Therefore $S_2(\ell)$ is invariant under every translation by $R/\ell$, and, using $-R$ as well, its indicator is periodic with period $1/\ell$ in every matrix coordinate. [given, F2, F3, algebra]

2.1 If $S_0(\ell)$ or $S_1(\ell)$ has positive measure for some prime $\ell$, steps 1.4 and 1.5 show the relevant set has measure $1$, and then $|F'|=1$. Otherwise for every prime $\ell$, both sets are null and $F'$ agrees with $S_2(\ell)$ up to a null set. [step 1.4, step 1.5, algebra]

2.2 Partition $Q$ into $\ell^{nm}$ half-open cubes of side $1/\ell$. Translation invariance [F8] makes the measure of $S_2(\ell)$ in every such grid cube equal, hence each is $|S_2(\ell)|/\ell^{nm}$. Periodicity and Fubini [F8] show the same value for any translated cube $C$ of side $1/\ell$: in each coordinate, the integral of a $1/\ell$-periodic function over any interval of one period is the same. Since $F'$ and $S_2(\ell)$ differ by a null set, $|F'\cap C|=|F'||C|$. If $|F'|>0$, choose a density point $X_0$ of $F'$ in the interior of $Q$; cubes $C_\ell$ centered at $X_0$ with side $1/\ell$ have relative density tending to $1$, by comparison with circumscribed balls and [F9]. The periodic identity makes that relative density exactly $|F'|$ for every sufficiently large prime $\ell$, so $|F'|=1$. [given, step 1.6, F1, F8, F9, F7]

3.1 In all cases, $|F'|$ is either $0$ or $1$. Under the current assumption $\Psi(q)/\|q\|_\infty\to0$, step 1.3 gives $|A'|=|F'|$, so $|A'|\in\{0,1\}$. Together with the large-radius case in step 1.2, this proves the assertion. [step 1.2, step 1.3, step 2.1, step 2.2, algebra] ∎
