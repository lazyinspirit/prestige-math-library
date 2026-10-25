---
id: lem-cocycle-central-extension-is-a-group
kind: lemma
title: "The twisted product of a normalized cocycle is a central extension"
status: published
origin: pipeline
deps: ["lem-factor-set-is-a-normalized-two-cocycle", "def-normalized-two-cocycle-and-two-coboundary", "def-group", "def-kernel-and-image-of-group-homomorphism", "thm-first-isomorphism-theorem-groups", "def-center-of-a-group"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Proposition 1.11, printed p. 4"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
verification:
  audited: 2026-09-27
---

## Statement

Let $Q$ be a group and let $\alpha:Q\times Q\to\mathbb C^\times$ be a normalized
two-cocycle on $Q$ with the trivial action on $\mathbb C^\times$, in the
multiplicative convention $\alpha(1,q)=\alpha(q,1)=1$ and
$\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$. Then
$$E_\alpha:=Q\times\mathbb C^\times,\qquad (q,z)(r,w):=(qr,\alpha(q,r)zw)$$
is a group with identity $(1,1)$ and $(q,z)^{-1}=(q^{-1},\alpha(q,q^{-1})^{-1}z^{-1})$.
The second factor $\mathbb C^\times\cong\{1\}\times\mathbb C^\times$ is a central
subgroup of $E_\alpha$, the projection $E_\alpha\to Q$ is a surjective
homomorphism with kernel $\{1\}\times\mathbb C^\times$, and
$E_\alpha/\bigl(\{1\}\times\mathbb C^\times\bigr)\cong Q$. In particular
$E_\alpha$ need not be finite.

## Facts & Assumptions

**Given:** A group $Q$, a normalized two-cocycle $\alpha:Q\times Q\to\mathbb C^\times$ in the multiplicative convention of [[def-normalized-two-cocycle-and-two-coboundary]], and the set $E_\alpha=Q\times\mathbb C^\times$ with the displayed product.

[F1] A normalized projective representation with factor set $\alpha$ satisfies $\alpha(1,q)=\alpha(q,1)=1$ and $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$ for all $q,r,s$. ([[lem-factor-set-is-a-normalized-two-cocycle]]).

[F2] Read multiplicatively with trivial action, a normalized two-cocycle on $Q$ is exactly a function $\alpha:Q\times Q\to\mathbb C^\times$ with $\alpha(1,q)=\alpha(q,1)=1$ and $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$. ([[def-normalized-two-cocycle-and-two-coboundary]]).

[F3] A group is a set with an associative binary operation, a two-sided identity, and two-sided inverses. ([[def-group]]).

[F4] For a homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism $G/\ker f\to\operatorname{im}f$. ([[thm-first-isomorphism-theorem-groups]]).

[F5] The center $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$ consists of the elements commuting with every element of $G$. ([[def-center-of-a-group]]).

[F6] The kernel of a group homomorphism is the set of elements mapped to the identity. ([[def-kernel-and-image-of-group-homomorphism]]).



## Proof

**Proof technique:** direct.

1.1 The product is associative: for $q,r,s\in Q$ and $z,w,x\in\mathbb C^\times$, the two bracketing orders of $(q,z)(r,w)(s,x)$ give $(qrs,\alpha(q,r)\alpha(qr,s)zwx)$ and $(qrs,\alpha(r,s)\alpha(q,rs)zwx)$, and these scalars are equal by the cocycle identity of [F1], [F2]; multiplication in each coordinate is associative as well, so the two results coincide. [F1, F2, algebra]

1.2 The element $(1,1)$ is a two-sided identity: $(1,1)(q,z)=(q,\alpha(1,q)z)=(q,z)$ and $(q,z)(1,1)=(q,\alpha(q,1)z)=(q,z)$ for all $q,z$, by the normalization in [F1], [F2]. [F1, F2, algebra]

2.1 The element $(q^{-1},\alpha(q,q^{-1})^{-1}z^{-1})$ is a two-sided inverse of $(q,z)$. On the right, $(q,z)(q^{-1},\alpha(q,q^{-1})^{-1}z^{-1})=(1,\alpha(q,q^{-1})\alpha(q,q^{-1})^{-1}z^{-1}z)=(1,1)$; on the left, $(q^{-1},\alpha(q,q^{-1})^{-1}z^{-1})(q,z)=(1,\alpha(q^{-1},q)\alpha(q,q^{-1})^{-1}z^{-1}z)$, and the scalar is $1$ because the cocycle identity at $(q,q^{-1},q)$ reads $\alpha(q,q^{-1})\alpha(1,q)=\alpha(q^{-1},q)\alpha(q,1)$, that is $\alpha(q,q^{-1})=\alpha(q^{-1},q)$ by the normalization of [F1], [F2]. [F1, F2, step 1.2, algebra]

3.1 Steps 1.1, 1.2 and 2.1 exhibit an associative product on $E_\alpha$ with a two-sided identity and two-sided inverses, so [F3] makes $E_\alpha$ a group. [F3, step 1.1, step 1.2, step 2.1]

4.1 The projection $\pi:E_\alpha\to Q$, $\pi(q,z)=q$, is a homomorphism: $\pi\bigl((q,z)(r,w)\bigr)=\pi(qr,\alpha(q,r)zw)=qr=\pi(q,z)\pi(r,w)$; it is surjective because $(q,1)\mapsto q$, and its kernel is $\{1\}\times\mathbb C^\times$ by the normalization, a subgroup isomorphic to $\mathbb C^\times$. That kernel is central: $(1,z')(q,z)=(q,\alpha(1,q)z'z)=(q,z'z)=(q,\alpha(q,1)zz')=(q,z)(1,z')$ for all $q,z,z'$, so it lies in $Z(E_\alpha)$ in the sense of [F5]. By [F4] applied to $\pi$, the quotient of $E_\alpha$ by this kernel, which is normal since centrality gives $eke^{-1}=k$ for every $e\in E_\alpha$ and every kernel element $k$, is isomorphic to the image $Q$. Finally $E_\alpha$ is infinite whenever $Q$ is nonempty, since $\{q\}\times\mathbb C^\times$ is an infinite subset for any $q\in Q$. [F1, F2, F4, F5, F6, step 3.1, algebra]

5.1 Collecting steps 3.1 and 4.1: $E_\alpha$ is a group with identity $(1,1)$ and inverses $(q,z)^{-1}=(q^{-1},\alpha(q,q^{-1})^{-1}z^{-1})$, whose central subgroup $\{1\}\times\mathbb C^\times\cong\mathbb C^\times$ has quotient $E_\alpha/\bigl(\{1\}\times\mathbb C^\times\bigr)\cong Q$, and which is infinite when $Q\ne\emptyset$; this is the central extension of $Q$ by $\mathbb C^\times$ determined by $\alpha$. [step 3.1, step 4.1] ∎
