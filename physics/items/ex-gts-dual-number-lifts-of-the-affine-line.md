---
id: ex-gts-dual-number-lifts-of-the-affine-line
kind: example
title: "Flat dual-number lifts of the affine line and their automorphisms"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory-examples
deps:
  - def-flat-and-faithfully-flat-modules-and-ring-maps
dependency_roles:
  def-flat-and-faithfully-flat-modules-and-ring-maps: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stacks Project, Deformation Theory"
      url: https://stacks.math.columbia.edu/download/defos.pdf
      locator: "Section 2, marked square-zero algebra-extension convention. The polynomial computation below is a self-contained generated example, not a theorem imported from this source."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Example

Let $k$ be any field, let $R=k[\epsilon]/(\epsilon^2)$ be the dual-number ring, and let $k[x]$ be the polynomial algebra in one indeterminate. A flat marked lift of $k[x]$ is a commutative unital $R$-algebra $D$ which is flat as an $R$-module, together with a specified $k$-algebra isomorphism $D/\epsilon D\cong k[x]$. A marked isomorphism is an $R$-algebra isomorphism inducing the identity of this specified quotient.

There is exactly one marked isomorphism class of such lifts, represented by $R[x]$ with its coefficient-reduction marking. Its marked automorphisms are exactly
$$\phi_p(x)=x+\epsilon p(x),\qquad p(x)\in k[x],$$
with $\phi_p\phi_q=\phi_{p+q}$, $\phi_p^{-1}=\phi_{-p}$, and identity $\phi_0$. In particular uniqueness of the marked isomorphism class does not imply uniqueness of marked isomorphisms or triviality of automorphisms.

## Example references

[[def-flat-and-faithfully-flat-modules-and-ring-maps]]

## Facts & Assumptions

**Given:** a field $k$, $R=k\oplus k\epsilon$ with $\epsilon^2=0$, and the polynomial algebra $k[x]$.

[F1] The explicitly defined ring $R=k\oplus k\epsilon$ has multiplication $(a+b\epsilon)(c+d\epsilon)=ac+(ad+bc)\epsilon$ and coefficient-reduction kernel $(\epsilon)$, which squares to zero.

[F2] [[def-flat-and-faithfully-flat-modules-and-ring-maps]] defines flatness by tensor exactness. A free module is flat because tensor with a direct sum of copies of $R$ is a direct sum of the original exact sequence.

## Verification

**Given:** [F1], [F2] and the marked-lift convention of the Example.

1.1 The algebra $R[x]$ is free over $R$ on $1,x,x^2,\ldots$, so it is flat, and its quotient modulo $\epsilon$ is exactly $k[x]$ with the stated marking. Its kernel $\epsilon k[x]$ has square zero. If $D$ is any flat marked lift, tensor $0\to(\epsilon)\to R\to k\to0$ with $D$. Exactness gives an injective multiplication map $(\epsilon)\otimes_RD\to D$ with image $\epsilon D$. Since $(\epsilon)\cong k$ as $R$-modules, the induced map $D/\epsilon D\to\epsilon D$, $\bar d\mapsto\epsilon d$, is an isomorphism. This is the exact kernel computation needed below. [F1, F2, given, algebra]

2.1 Choose $y\in D$ mapping to the marked variable $x$. The polynomial map $u:R[t]\to D$, $t\mapsto y$, is a marked isomorphism. Indeed any $d\in D$ differs from a polynomial in $y$ with coefficients in $k$ by $\epsilon e$; replacing $e$ by a polynomial with the same reduction changes $\epsilon e$ by zero. Thus $u$ is surjective. If $u(f)=0$, reduction gives $\bar f(x)=0$ in $k[x]$, so $f=\epsilon g$ for some $g\in R[t]$. Step 1.1 then implies $\overline{g(y)}=0$ in $D/\epsilon D$, hence $\bar g(x)=0$ and $g=\epsilon h$. Therefore $f=\epsilon^2h=0$, proving injectivity. Renaming $t$ as $x$ gives the representative $R[x]$. Neither existence nor uniqueness here invokes an obstruction theorem. [F1, F2, step 1.1, choose, algebra]

2.2 A marked endomorphism of $R[x]$ is determined by its value on $x$, and that value must reduce to $x$. The kernel of $R[x]\to k[x]$ is precisely $\epsilon k[x]$, so the value is uniquely $x+\epsilon p(x)$ for $p\in k[x]$. Conversely each such value determines a unital $R$-algebra homomorphism by polynomial substitution. For any polynomial $q\in k[x]$, binomial expansion gives $\epsilon q(x+\epsilon p(x))=\epsilon q(x)$; every other term contains $\epsilon^2$. Consequently composing $\phi_p$ and $\phi_q$ sends $x$ to $x+\epsilon(p(x)+q(x))$. The inverse is $\phi_{-p}$. This proves the complete classification and group law in every characteristic. [F1, step 1.1, algebra, construct]

3.1 Taking $p=1$ gives a nonidentity automorphism since $\epsilon\ne0$ in $R$. Any two marked isomorphisms from a chosen lift to $R[x]$ differ by exactly one of the automorphisms in step 2.2, by composing one with the inverse of the other. Thus the set of marked isomorphism classes is a singleton while the automorphism group is the nonzero additive group of $k[x]$. This verifies the distinction in the Example explicitly. [step 2.1, step 2.2, algebra] ∎
