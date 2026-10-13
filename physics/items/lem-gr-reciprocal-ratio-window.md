---
id: lem-gr-reciprocal-ratio-window
kind: lemma
title: "The reciprocal ratio map $a\\mapsto a_*/a$: strict decrease, inverse, and the exact preimages of points and closed intervals"
status: published
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-ordered-field, lem-of-sign-rules, lem-of-inverse-positive]
dependency_roles:
  def-ordered-field: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
sources:
  references:
    - title: "J. Lebl, Basic Analysis I, Chapter 1 on the real numbers as an ordered field: positivity of products, order reversal under multiplication by a negative, and uniqueness of multiplicative inverses"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "University of Illinois Chicago, Math 215 notes: Ordered field axioms (closure of the positive cone under multiplication, trichotomy and the order axioms)"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
verification:
  precheck: pass
---

## Statement

Let $a_*>0$ be a real number and define

$$F:(0,\infty)\to(0,\infty),\qquad F(a):=\frac{a_*}{a}=a_*\,a^{-1}.$$

1. **Strict decrease.** For reals $0<a_1<a_2$ one has $F(a_1)>F(a_2)$; so $F$ is
   strictly decreasing.
2. **Inverse.** $F$ is a bijection of $(0,\infty)$ onto $(0,\infty)$ with
   inverse $F^{-1}(u)=a_*/u$: that is, $F(F^{-1}(u))=u$ and
   $F^{-1}(F(a))=a$ for all $a,u>0$.
3. **Point preimages.** For every $u>0$, $F^{-1}(\{u\})=\{a_*/u\}$, and
   $F(a)=u$ holds if and only if $a=a_*/u$.
4. **Interval windows.** For reals $0<u_1\le u_2$ the preimage of the closed
   interval is

   $$F^{-1}\bigl([u_1,u_2]\bigr)=\left[\frac{a_*}{u_2},\ \frac{a_*}{u_1}\right],$$

   a nonempty closed interval contained in $(0,\infty)$, of length

   $$\frac{a_*}{u_1}-\frac{a_*}{u_2}=\frac{a_*(u_2-u_1)}{u_1u_2};$$

   the length is $0$ exactly when $u_1=u_2$ and strictly positive exactly when
   $u_1<u_2$.

## Facts & Assumptions

**Given:** A real number $a_*>0$ and the map $F(a)=a_*a^{-1}$ on $(0,\infty)$.

[F1] $\mathbb R$ is an ordered field ([[def-ordered-field]]): the positive cone
$P=\{x\in\mathbb R:x>0\}$ is closed under multiplication, $x<y$ holds exactly
when $y-x\in P$, and for nonzero $x$ exactly one of $x\in P$, $-x\in P$ holds.
In particular $x>0$ and $y>0$ imply $xy>0$, and every nonzero real has a unique
multiplicative inverse.

[L1] Order rules ([[lem-of-sign-rules]] claims 1 and 4): if $a>0$ and $b>0$
then $ab>0$; and if $c>0$ then $a<b$ if and only if $ac<bc$.

[L2] Reciprocation ([[lem-of-inverse-positive]] claims 1 and 2): if $a>0$ then
$a^{-1}>0$; and if $0<a<b$ then $0<b^{-1}<a^{-1}$.

## Proof

**Proof technique:** direct.

1.1 (Strict decrease.) Let $0<a_1<a_2$. By [L2] claim 2 applied to $a_1<a_2$, $0<a_2^{-1}<a_1^{-1}$; since $a_*>0$, [L1] claim 4 (multiplying the strict inequality by the positive number $a_*$) gives $a_*a_2^{-1}<a_*a_1^{-1}$, that is, $F(a_2)<F(a_1)$ by the definition of $F$. Hence $F$ is strictly decreasing on $(0,\infty)$, which is claim 1. [F1, L1, L2, algebra]

1.2 (Inverse and bijectivity.) Let $u>0$. By [L2] claim 1, $a_*/u>0$, so $a_*/u$ lies in the domain $(0,\infty)$ of $F$ and is nonzero; using associativity, commutativity and the inverse law in the field $\mathbb R$ ([F1]), $F\bigl(F^{-1}(u)\bigr)=a_*(a_*/u)^{-1}=a_*\,u\,a_*^{-1}=u$. Symmetrically, for $a>0$ one has $F^{-1}\bigl(F(a)\bigr)=a_*(a_*a^{-1})^{-1}=a_*\,a\,a_*^{-1}=a$. Thus $F$ and the map $u\mapsto a_*/u$ are mutually inverse, so $F$ is a bijection of $(0,\infty)$ onto $(0,\infty)$; this is claim 2. [F1, L2, algebra]

1.3 (Interval windows.) Let $0<u_1\le u_2$ and $a>0$. The inequality $F(a)\in[u_1,u_2]$ reads $u_1\le a_*a^{-1}\le u_2$; multiplying both inequalities by the positive number $a$ via [L1] claim 4 gives $u_1a\le a_*\le u_2a$, equivalently $u_1a\le a_*$ and $a_*\le u_2a$. Dividing the first inequality by the positive $u_1$ and the second by the positive $u_2$, again by [L1] claim 4, gives $a\le a_*/u_1$ and $a\ge a_*/u_2$, that is, $a\in[a_*/u_2,\,a_*/u_1]$. Conversely every $a$ in that interval satisfies $u_1a\le a_*\le u_2a$ and hence, after division by the positive $a$, lies in $F^{-1}([u_1,u_2])$; so $F^{-1}([u_1,u_2])=[a_*/u_2,a_*/u_1]$. The interval is nonempty because $u_1\le u_2$ and division of positive numbers reverses the reciprocal order ([L2] claim 2 applied to $u_1<u_2$, with the equality case $u_1=u_2$ giving coincident endpoints), and both endpoints are strictly positive by [L2] claim 1; this is the first part of claim 4. [F1, L1, L2, algebra]

2.1 (Point preimages.) Let $u>0$ and $a>0$. Multiplying the equation $a_*a^{-1}=u$ by the nonzero number $a$ and using field arithmetic gives $a_*=ua$; multiplying instead by the nonzero number $u^{-1}$ gives $a=a_*u^{-1}=a_*/u$. Conversely $F(a_*/u)=u$ by step 1.2. Hence $F(a)=u$ if and only if $a=a_*/u$, and the point preimage is the singleton $\{a_*/u\}$; this is claim 3. [F1, L1, L2, step 1.2, algebra]

2.2 (Length of the window.) The length of the interval of step 1.3 is $\frac{a_*}{u_1}-\frac{a_*}{u_2}=\frac{a_*u_2-a_*u_1}{u_1u_2}=\frac{a_*(u_2-u_1)}{u_1u_2}$, by field arithmetic. The denominator is a product of positive numbers, hence positive ([F1], [L1] claim 1), and the numerator is a product of $a_*>0$ with $u_2-u_1\ge0$, hence nonnegative, and positive exactly when $u_2-u_1>0$ by the trichotomy in [F1]. Therefore the length is zero exactly when $u_1=u_2$ and strictly positive exactly when $u_1<u_2$, which completes claim 4. [F1, L1, L2, step 1.3, algebra]

3.1 Collecting the steps: claim 1 is step 1.1, claim 2 is step 1.2, claim 3 is step 2.1, and claim 4 is steps 1.3 and 2.2. No step uses calculus, a choice principle, a limit or a completeness property of $\mathbb R$ beyond the ordered field axioms of [F1]; the map and its inverse are explicit rational expressions. [F1, step 1.1, step 1.2, step 2.1, step 1.3, step 2.2] ∎
