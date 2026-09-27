---
id: thm-nonabelian-extension-obstruction-and-torsor-with-choice
kind: theorem
title: "Nonabelian extension obstruction and torsor under choice"
status: published
origin: session
deps: [def-axiom-of-choice, def-abstract-kernel-and-the-general-extension-problem, def-inhomogeneous-group-cochains, lem-the-inhomogeneous-group-cochain-differential-squares-to-zero, def-second-cohomology-by-factor-sets]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups II: Group Extensions with a Non-Abelian Kernel"
      url: "https://doi.org/10.2307/1969174"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §6.6.12, Crossed Modules and H3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $\alpha:Q\to\operatorname{Out}(N)$ be an
abstract kernel, and let $Z=Z(N)$ carry the $Q$-action induced by $\alpha$.
Here $H^2$ and $H^3$ mean cohomology of the explicit normalized inhomogeneous
cochain complex. There is a canonical class
$o(\alpha)\in H^3(Q,Z)$ such that $\alpha$ is induced by an extension
$1\to N\to E\to Q\to1$ if and only if $o(\alpha)=0$.
When extensions exist, their equivalence classes with the prescribed
identifications of $N$ and $Q$ form a torsor under $H^2(Q,Z)$.

## Facts & Assumptions

**Given:** Choice, $N,Q,\alpha$ as stated, and
the inhomogeneous cochain differential of
[[def-inhomogeneous-group-cochains]]. We use multiplicative notation for the
abelian group $Z$. A normalized $k$-cochain is a function $Q^k\to Z$ equal
to $1$ whenever any argument is $1$; the displayed differential preserves
normalization and satisfies $d^2=1$ by
[[lem-the-inhomogeneous-group-cochain-differential-squares-to-zero]].
For $k=2,3$, $H^k(Q,Z)$ means the group of normalized $k$-cocycles modulo
normalized $k$-coboundaries. In degree two this is the established
factor-set quotient [[def-second-cohomology-by-factor-sets]]. These
cochain groups and quotients are explicit and require no resolution selection.
Choice is used to select automorphism representatives, central correction
factors, and sections of arbitrary extension quotients.

## Proof

**Proof technique:** direct.

1.1 Inner automorphisms fix $Z$ pointwise. Consequently any representative of $\alpha(p)$ acts on $Z$ in the same way; because $\alpha$ is a homomorphism, these restrictions give a genuine $Q$-module structure on $Z$. By Choice select automorphisms $t_p\in\operatorname{Aut}(N)$ representing $\alpha(p)$, with $t_1=\mathrm{id}$. Choose $f(p,q)\in N$, normalized by $f(1,q)=f(p,1)=1$, such that $$t_p t_q=\operatorname{Inn}(f(p,q))t_{pq}.$$ This is possible because the two automorphisms have the same outer class. For triples, the two ways of composing $t_p t_q t_r$ show that $$z(p,q,r):=t_p(f(q,r))f(p,qr)\bigl(f(p,q)f(pq,r)\bigr)^{-1}.$$ belongs to $Z$. It is normalized whenever an argument is $1$. [given, choose, algebra]

2.1 Here is the cocycle calculation without suppressing the noncentral factors. Set $T=t_p(t_q(f(r,s))),t_p(f(q,rs)),f(p,qrs)$. Applying the triple relation first to $(q,r,s)$, then to $(p,qr,s)$, then to $(p,q,r)$ gives $$T=(p\cdot z(q,r,s))z(p,qr,s)z(p,q,r),f(p,q)f(pq,r)f(pqr,s).$$ Applying it instead to $(p,q,rs)$ and $(pq,r,s)$, using $t_p t_q=\operatorname{Inn}(f(p,q))t_{pq}$, gives $$T=z(p,q,rs)z(pq,r,s),f(p,q)f(pq,r)f(pqr,s).$$ Cancel the identical ordered product of the three noncentral $f$ factors on the right. The remaining central factors commute, yielding $$p\cdot z(q,r,s);z(pq,r,s)^{-1};z(p,qr,s);z(p,q,rs)^{-1};z(p,q,r)=1.$$ This is exactly $dz=1$ for the inhomogeneous degree-three differential, so $z$ defines a class in $H^3(Q,Z)$. [step 1.1, algebra]

3.1 If $f'(p,q)=c(p,q)f(p,q)$ for a normalized map $c:Q^2\to Z$ with the same representatives $t$, direct substitution gives $z'=z\,dc$. If representatives change to $t'_p=\operatorname{Inn}(b_p)t_p$ with $b_1=1$, use $$f'(p,q)=b_p\cdot t_p(b_q)\cdot f(p,q)\cdot b_{pq}^{-1}.$$ Substitution cancels the $b$ factors and gives the same $z$; any other factor choice for $t'$ differs by a central $c$ and hence changes $z$ by a coboundary. Thus $o(\alpha):=[z]$ is independent of every choice. [step 1.1, step 2.1, algebra]

4.1 If an extension inducing $\alpha$ exists, Choice supplies a normalized section $s:Q\to E$. Conjugation by $s(p)$ yields representatives $t_p$, and $s(p)s(q)=f(p,q)s(pq)$ gives factors $f(p,q)\in N$. Associativity in $E$ says $t_p(f(q,r))f(p,qr)=f(p,q)f(pq,r)$, so $z=1$ and $o(\alpha)=0$. [step 3.1, choose, algebra]

4.2 Conversely, if $o(\alpha)=0$, a normalized central two-cochain $c$ can be chosen with $z\,dc=1$; replace $f$ by $cf$. Here $c$ is normalized because $H^3$ was defined from normalized cochains. On the set $N\times Q$ define $$ (n,p)(m,q)=(n\cdot t_p(m)\cdot f(p,q),pq). $$ The identity is $(1,1)$. The conjugation identity of step 1.1 and the associativity equation imposed at the start of this step make this multiplication associative. Left and right translations have inverses because each $t_p$ is an automorphism and $Q$ is a group; explicitly, the unique right inverse of $(n,p)$ has second coordinate $p^{-1}$ and first coordinate $t_p^{-1}(n^{-1}f(p,p^{-1})^{-1})$, and associativity makes it a two-sided inverse. Thus $N\times Q$ is a group, and projection to $Q$ is an extension whose conjugation action has outer class $\alpha$. [step 1.1, step 3.1, algebra]

5.1 Fix one associative normalized factor system $(t,f_0)$ from step 4.2. Any other extension realizing $\alpha$ has a normalized section by Choice. Its representatives differ from $t_p$ by inner automorphisms; using Choice again, adjust the section by elements of $N$ to make its representatives exactly $t_p$. Its factors then have the form $f=c f_0$ for a unique normalized map $c:Q^2\to Z$, because both factor systems implement $t_p t_q$. The associativity equation for $f$ reduces precisely to $dc=1$. Conversely every normalized $Z$-valued two-cocycle $c$ gives an associative factor system $cf_0$ and hence an extension by step 4.2. [step 1.1, step 4.2, choose, algebra]

6.1 Two such extensions with the same $t$ are equivalent while fixing $N$ and $Q$ exactly when their factors differ by a central coboundary. Indeed, an equivalence sends the standard section $(1,p)$ to $(b_p,p)$; compatibility with conjugation by that section forces $b_p\in Z$, and compatibility with products gives $f'(p,q)=f(p,q)b_{pq}[b_p(p\cdot b_q)]^{-1}$, namely $f'/f=(db)^{-1}$. Conversely the map $(n,p)\mapsto(n b_p,p)$ is an equivalence whenever this relation holds. Therefore the difference between two extension classes is a unique element of $H^2(Q,Z)$, and multiplication of factors by representatives gives a free transitive $H^2(Q,Z)$-action. The initial choice of $f_0$ identifies the torsor with the group, but no preferred origin is implied. [step 5.1, algebra] ∎
