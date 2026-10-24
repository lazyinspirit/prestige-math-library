---
id: "ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere"
kind: "example"
title: "Local degrees of a polynomial map on the riemann sphere"
deps: ["thm-global-sphere-degree-is-the-sum-of-local-degrees", "thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity", "thm-long-exact-sequence-of-a-pair-in-singular-homology", "thm-naturality-of-the-long-exact-sequence-of-a-pair"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Proposition 2.30 and Example 2.32, pp.136–137"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Proposition 2.30 and Example 2.32, pp.136–137"
    - title: "Lebl, Guide to Cultivating Complex Analysis, Theorem 5.1.3 and Exercise 1.3.9"
      url: "https://jirilebl.github.io/ca/ca.pdf"
      locator: "§1.3 stereographic construction and Exercises 1.3.1–1.3.9, pp.19–20; Lemma 5.1.1 and Definition 5.1.2, pp.122–123; Theorem 5.1.3 p.123 read as a stronger comparison, not used."
status: published
origin: "pipeline"
proof_strategy: "Construct the sphere model inline: inverse stereographic coordinates send z to (2 Re(z),2 Im(z),|z|^2-1)/(1+|z|^2), and infinity to the north pole; verify continuity and inverse. Use the orientation for which the finite complex coordinate is positive; the infinity coordinate w=1/z has transition derivative multiplication by -1/z^2, hence positive real determinant, or verify its local sign by rotation and positive dilation. Polynomial division gives P(z)-P(a)=(z-a)^m q(z), q(a)!=0. Shrink until |q(z)-q(a)|<|q(a)|, so the straight-line homotopy of q to q(a) never vanishes; this is a homotopy of punctured local pairs to q(a)(z-a)^m. The pair LES identifies its local H_2 action with the angular power map on H_1 of a small circle. Compute the m positive local angular contributions inline, without depending on another B item. At infinity, 1/P(1/w)=w^d/(a_d+a_(d-1)w+...+a_0 w^d), so the same nonvanishing-factor argument gives local degree d. The leading-term growth bound proves extension at infinity. The published polynomial root-multiplicity theorem gives total finite-fibre multiplicity d, and the local-degree sum gives global degree d. This retains all multiplicity conclusions without a holomorphic normal-form or rational-map prerequisite."
---

## Example

Let $P(z)=a_dz^d+\cdots+a_0\in\mathbb C[z]$, with $d\ge1$ and $a_d\ne0$. The map $\widehat P:\mathbb C\cup\{\infty\}\to\mathbb C\cup\{\infty\}$ defined by $\widehat P|_{\mathbb C}=P$ and $\widehat P(\infty)=\infty$ is a continuous self-map of an oriented $2$-sphere and has degree $d$. At each finite $a$, its local degree is the multiplicity of the zero $a$ of $P(z)-P(a)$; its local degree at infinity is $d$. Use the complex orientation in both source and target.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $f:S^n\to S^n$ be continuous, $n\ge1$, with source and target orientations fixed. If $f^{-1}(y)$ is finite, then $$\deg(f)=\sum_{x\in f^{-1}(y)}\deg_x f.$$ The sum over an empty fibre is $0$. ([[thm-global-sphere-degree-is-the-sum-of-local-degrees]])

[F2] Let $f \in \mathbb C[x]$ have degree $n \ge 1$. Then there exist distinct complex numbers $\alpha_1,\dots,\alpha_r$ and positive integers $m_1,\dots,m_r$ such that $$ f(x)=c\prod_{j=1}^r (x-\alpha_j)^{m_j} $$ for some $c \in \mathbb C^\times$, with $$ m_1+\cdots+m_r=n. $$ These exponents are uniquely determined by $f$. Equivalently, $f$ has exactly $n$ roots counted with multiplicity. ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]])

[F3] For $A\subseteq X$ there is an exact sequence $$\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to H_{n-1}(X;G)\to\cdots.$$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]])

[F4] A map of pairs $f:(X,A)\to(Y,B)$ induces a commuting morphism from the long exact sequence of $(X,A)$ to that of $(Y,B)$, including the connecting maps. ([[thm-naturality-of-the-long-exact-sequence-of-a-pair]])

## Verification

1.1 Here is the sphere model and its orientation. The map $s(z)=(2\operatorname{Re}z,2\operatorname{Im}z,|z|^2-1)/(1+|z|^2)$ lies on the unit sphere, and its inverse off the north pole is $(x,y,t)\mapsto(x+iy)/(1-t)$. Both formulas are continuous and inverse by substitution. Moreover $s(z)$ approaches the north pole exactly as $|z|\to\infty$, giving the topology with neighborhoods of infinity containing $\{|z|>R\}\cup\{\infty\}$. Declare the finite coordinate $z$ positive and use $w=1/z$ near infinity. At $z_0\ne0$, writing $z=z_0+u$, the transition difference is $1/(z_0+u)-1/z_0=-u/(z_0(z_0+u))$. On a sufficiently small disk its nonzero factor is homotopic through nonzero factors to $-1/z_0^2$. Multiplication by a nonzero complex constant is a rotation followed by a positive dilation, homotopic through invertible real maps to the identity. Thus the two charts give compatible local orientations; no orientation-reversal is hidden at infinity. [construct, algebra]

2.1 The leading-term estimate gives $|P(z)|\ge |a_d||z|^d/2$ for all sufficiently large $|z|$: divide the sum of lower-degree terms by $|z|^d$, which tends to zero. It proves continuity at infinity. For a finite $a$, polynomial division yields $P(a+u)-P(a)=u^m q(a+u)$ with $m\ge1$ and $q(a)\ne0$. Shrink the disk until $|q(a+u)-q(a)|<|q(a)|$. The homotopy $u^m((1-s)q(a+u)+sq(a))$ has zero only at $u=0$ for every $0\le s\le1$. Uniform boundedness of the factors permits a source disk mapping into one fixed target coordinate disk. Hence this is a homotopy of punctured local pairs to $q(a)u^m$. [step 1.1, construct, algebra]

3.1 For a disk $D$ centered at zero, the pair exact sequence [F3] identifies $H_2(D,D\setminus\{0\};\mathbb Z)$ with $H_1(D\setminus\{0\};\mathbb Z)$; radial deformation identifies the latter with the counterclockwise circle generator. The normalized map of a small circle for $cu^m$, $c\ne0$, is a rotation times $e^{it}\mapsto e^{imt}$. The latter has $m$ preimages of $1$. Near each preimage its angular formula is $t\mapsto mt$, homotopic through positive linear slopes to $t\mapsto t$, so its local degree is $+1$. Applying [F1] in dimension one gives angular degree $m$. Rotation acts trivially by its rotation homotopy. Naturality [F4] of the disk pair boundary therefore gives local degree $m$ for $cu^m$, and step 2.1 gives the claimed finite local multiplicities. [F1, F3, F4, step 2.1, algebra]

4.1 In the coordinates $w=1/z$ and $v=1/P(z)$ at the two infinities, the map is $v=w^d/(a_d+a_{d-1}w+\cdots+a_0w^d)$, extended by $v(0)=0$. Its denominator is nonzero on a small disk. The same nonvanishing-factor homotopy and disk-boundary calculation give local degree $d$ at infinity. The value is positive with the compatible chart orientations of step 1.1. [step 1.1, step 2.1, step 3.1, algebra]

5.1 For any finite $b$, [F2] applied to the degree-$d$ polynomial $P-b$ says its distinct roots have positive multiplicities summing to $d$. They form the entire finite fibre, since infinity maps to infinity. By step 3.1 and [F1], $\deg\widehat P$ is the sum of these local degrees, hence $d$. This also agrees with applying [F1] to the singleton fibre of infinity and step 4.1. Repeated roots and $d=1$ require no change. [F1, F2, step 3.1, step 4.1] ∎
