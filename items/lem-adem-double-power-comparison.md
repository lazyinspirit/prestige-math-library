---
id: lem-adem-double-power-comparison
kind: lemma
title: Adem double-power comparison
status: published
origin: pipeline
deps: ["lem-finite-cellular-cyclic-squares-cartan-and-basis-action", "lem-wreath-double-power-coefficient-symmetry", "lem-equivariant-p-fold-external-power-and-diagonal", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VIII Convention 1.4 and Theorem 1.5 through its high-degree calculation, printed pages 118--119
---

## Statement

Assume AC. For the finite-cellular mod-two cyclic squares, let
$x\in H^q_{\mathrm{cell}}(K;\mathbb F_2)$. With all operations and binomial
coefficients outside their ordinary nonnegative ranges declared zero, the
double-power coefficients satisfy

$$D_{2q-a,\,2q-\ell}(x)=\sum_{i=0}^{q}\binom{q-i}{q+i-\ell}Sq_{\mathrm{cyc}}^{a+\ell-q-i}Sq_{\mathrm{cyc}}^i(x),$$

and row--column transposition gives the identity

$$\sum_{i=0}^{q}\binom{q-i}{q+i-\ell}Sq_{\mathrm{cyc}}^{a+\ell-q-i}Sq_{\mathrm{cyc}}^i(x)=\sum_{r=0}^{q}\binom{q-r}{q+r-a}Sq_{\mathrm{cyc}}^{a+\ell-q-r}Sq_{\mathrm{cyc}}^r(x).$$

Consequently, if $a,b$ are positive integers with $0<a<2b$, if
$2^s>a$, if $q=2^s-1+b$, and if $x$ has degree $q$, then

$$Sq_{\mathrm{cyc}}^aSq_{\mathrm{cyc}}^b(x)=\sum_{r=0}^{\lfloor a/2\rfloor}\binom{b-r-1}{a-2r}Sq_{\mathrm{cyc}}^{a+b-r}Sq_{\mathrm{cyc}}^r(x).$$

This is the finite-cellular high-degree coefficient calculation. Descent to
all degrees and identification with the singular cup-$i$ squares are not
asserted here.

## Facts & Assumptions

**Given:** AC, integers $a,\ell$, a nonnegative degree $q$, a finite oriented
regular cell complex $K$, and a class
$x\in H^q_{\mathrm{cell}}(K;\mathbb F_2)$.

[F1] The finite-cellular cyclic squares obey the external Cartan formula
([[lem-finite-cellular-cyclic-squares-cartan-and-basis-action]]).

[F4] They act on the cyclic basis by
$Sq_{\mathrm{cyc}}^j(w_r)=\binom rj w_{r+j}$
([[lem-finite-cellular-cyclic-squares-cartan-and-basis-action]]).

[F2] At $p=2$, the iterated double-power coefficients are symmetric:
$D_{j,k}(x)=D_{k,j}(x)$
([[lem-wreath-double-power-coefficient-symmetry]]).

[F5] The full cyclic-power expansion has additive coefficients $D_r$, and
the external class is natural; uniqueness of its cyclic-basis coordinates
therefore makes every $D_r$ natural
([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F3] AC supplies a choice function for every set-indexed family of nonempty
sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** expand one iterated total square in the two cyclic
bases, use row--column symmetry, and perform the binary-digit calculation
after a high-degree substitution.

1.1 Expand the iterated class in both cyclic coordinates. First justify the truncation of the inner expansion. For $r>q$, the class $D_r(x)$ has degree $2q-r<q$. Restriction to the cellular $q$-skeleton is an isomorphism in that degree, and naturality in [F5] identifies the restriction with $D_r$ of the restricted class. Collapse the $(q-1)$-skeleton of the $q$-skeleton. The restricted $x$ is the pullback of a class on the resulting wedge of $q$-spheres, so additivity and naturality in [F5] reduce the calculation to one sphere. For $q<r<2q$ the target $H^{2q-r}(S^q;\mathbb F_2)$ is zero. For $r=2q$ and $q>0$, restriction to a point is an isomorphism in degree zero, while the positive-degree input restricts to zero and additivity gives $D_{2q}(0)=0$. When $q=0$, every $r>q$ is already outside the range $0\leq r\leq2q$; for $q>0$, every $r>2q$ is outside the same range. Hence $D_r(x)=0$ for all $r>q$. [given, F1, F4, F5]

The first cyclic diagonal of a degree-$q$ class is

$$\sum_{r=0}^{2q}w_r\times D_r(x)=\sum_{i=0}^{q}w_{q-i}\times Sq_{\mathrm{cyc}}^i(x).$$

For the finitely many nonnegative basis degrees used below, choose one of the
finite regular projective models $Q_N$ supplied by [F4], with $N$ larger than
their maximum. The $w_{q-i}$ factor means the corresponding restricted class
on $Q_N$. Thus the following external Cartan computation takes place on the
finite regular complex $Q_N\times K$; no one-cell projective skeleton is used
as an input. Naturality in [F4] makes the result independent of increasing
$N$.

Apply the outer cyclic square. Its coordinate $w_{2q-a}$ is obtained by
applying $Sq_{\mathrm{cyc}}^a$ to every displayed product. By Cartan from
[F1] and the basis action from [F4],

$$Sq_{\mathrm{cyc}}^a\bigl(w_{q-i}\times Sq_{\mathrm{cyc}}^i x\bigr)=\sum_j\binom{q-i}{j}w_{q-i+j}\times Sq_{\mathrm{cyc}}^{a-j}Sq_{\mathrm{cyc}}^i x.$$

The second cyclic coordinate equals $w_{2q-\ell}$ exactly when
$j=q+i-\ell$. Substitution gives the first displayed formula in the
statement. The outside-range conventions make this a finite equality for
arbitrary integer $a,\ell$.

2.1 Apply row--column transposition. At $p=2$, both signs in the transposition formula of [F2] equal one in $\mathbb F_2$. Thus [F2, step 1.1]

$$D_{2q-a,\,2q-\ell}(x)=D_{2q-\ell,\,2q-a}(x).$$

Apply step 1.1 to the right side with $a$ and $\ell$ exchanged, and rename
its inner index $r$. The outer exponent remains
$a+\ell-q-r$, while the basis coefficient becomes
$\binom{q-r}{q+r-a}$. This is precisely the asserted two-sum identity.

3.1 Isolate the left-hand summand after the high-degree substitution. Assume now $0<a<2b$, choose $s$ with $2^s>a$, put $q=2^s-1+b$, and put $\ell=q+b$. On the left of step 2.1 the binomial coefficient is [step 2.1]

$$\binom{q-i}{q+i-\ell}=\binom{2^s-1+b-i}{i-b}.$$

We first prove the binary coefficient criterion used twice below. If
$n=\sum_\nu n_\nu2^\nu$, then in $\mathbb F_2[z]$ the Frobenius identity
gives

$$(1+z)^n=\prod_{\nu:n_\nu=1}(1+z)^{2^\nu}=\prod_{\nu:n_\nu=1}(1+z^{2^\nu}).$$

Thus $\binom nd$ is odd exactly when every nonzero binary digit of $d$ is
also a nonzero digit of $n$.

It is zero for $i<b$ by the negative-lower-index convention. If $i=b+h$
with $h>0$, then it is
$\binom{2^s-1-h}{h}$. Here $0<h<2^s$. Let $2^v$ be the lowest nonzero binary
digit of $h$. In the first $s$ binary digits,
$2^s-1-h$ is the digitwise complement of $h$, so its $v$th digit is zero
while the $v$th digit of $h$ is one. The proved binary criterion therefore
makes the coefficient zero.

For $i=b$, the coefficient is $\binom{2^s-1}{0}=1$, and the outer exponent
is $a+\ell-q-b=a$. Hence the entire left side of step 2.1 is
$Sq_{\mathrm{cyc}}^aSq_{\mathrm{cyc}}^b(x)$.

4.1 Reduce every right-hand coefficient. For the right side, complementing the lower index inside the upper one gives [step 2.1, step 3.1]

$$\binom{q-r}{q+r-a}=\binom{q-r}{a-2r}.$$

A nonzero term must have $0\leq a-2r$, so
$0\leq r\leq\lfloor a/2\rfloor$. Since $a<2b$, every such $r$ satisfies
$r<b$. Put $c=b-r-1\geq0$. Then $q-r=2^s+c$, while
$0\leq a-2r<2^s$. The binary criterion from step 3.1 sees only the lowest
$s$ digits of the upper number, and adding $2^s$ does not change those
digits. Therefore

$$\binom{q-r}{a-2r}\equiv\binom{b-r-1}{a-2r}\pmod2.$$

The operation exponent on this summand is
$a+\ell-q-r=a+b-r$. Substitution into the right side of step 2.1 yields
exactly the finite sum in the statement.

5.1 Check ranges, models, and choice. If $K$ is empty, its cellular complex is zero, or $x=0$, both sides are zero. For a point, the required positive degree $q=2^s-1+b$ has zero cohomology, so the identity is again zero. The strict hypotheses $0<a<2b$ and $2^s>a$ are used respectively to obtain $r<b$ and to keep the lower binary index below the added $2^s$ digit. The endpoints $r=0$ and $r=\lfloor a/2\rfloor$ are retained, including the case of a zero lower binomial index. Every negative or oversized binomial and every outside-range square was declared zero before the calculation. [F3, step 1.1, step 2.1, step 3.1, step 4.1]

This is a finite regular cellular argument, so singular degeneracies are
item-specifically inapplicable. Step 1.1 explicitly chooses a sufficiently
large regular $Q_N$ for its finite set of basis degrees. AC from [F3] is
propagated exactly through the cyclic-square and double-power suppliers used
in steps 1.1 and 2.1, including the cyclic supplier's ordinary cup comparison
and field duality. Choosing $s$ can be done by taking the least integer with
$2^s>a$, and every sum and binary-digit test is finite. No Adem theorem,
degree-descent result, or singular cup-$i$ comparison is used. ∎
