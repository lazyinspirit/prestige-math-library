---
id: lem-projective-representations-are-twisted-group-algebra-modules
kind: lemma
title: "Projective representations and twisted algebra modules"
status: draft
origin: pipeline
deps: ["def-twisted-group-algebra-for-a-factor-set", "def-projective-representation-and-factor-set", "lem-factor-set-is-a-normalized-two-cocycle", "def-algebra-over-a-commutative-ring", "def-left-and-right-modules", "def-composition-series-and-length-of-a-module", "def-semisimple-module", "def-semisimple-ring", "thm-finite-length-semisimple-module-characterizations"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Remark 1.5(b), printed p. 3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory — semisimplicity of finite group algebras"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
proof_strategy: direct
---

## Statement

$\mathbb C^\alpha[Q]$ is an associative unital algebra. Nonzero
finite-dimensional left $\mathbb C^\alpha[Q]$-modules are precisely normalized
projective $Q$-representations with factor set $\alpha$; the zero module is the
common zero object, and this algebra is semisimple over $\mathbb C$.

## Facts & Assumptions

**Given:** A finite group $Q$, a normalized two-cocycle $\alpha:Q\times Q\to\mathbb C^\times$, the space $A=\mathbb C^\alpha[Q]$ with basis $(u_q)_{q\in Q}$ and product $u_qu_r=\alpha(q,r)u_{qr}$, and a finite-dimensional left $A$-module $M$ for the structure part.

[F1] For all $q,r,s\in Q$ one has $\alpha(1,q)=\alpha(q,1)=1$ and $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$; the product on $A$ is the bilinear extension of $u_qu_r=\alpha(q,r)u_{qr}$, and $u_qu_{q^{-1}}=\alpha(q,q^{-1})u_1$. ([[def-twisted-group-algebra-for-a-factor-set]]).

[F2] A normalized projective representation $P$ of $Q$ on a nonzero finite-dimensional space $V$ is a map with $P(1)=\operatorname{id}_V$ and $P(q)P(r)=\alpha(q,r)P(qr)$, and every $P(q)$ is invertible. ([[def-projective-representation-and-factor-set]]).

[F3] $\alpha(q,q^{-1})=\alpha(q^{-1},q)$ for every $q\in Q$. ([[lem-factor-set-is-a-normalized-two-cocycle]]).

[F4] An $R$-algebra is a unital ring $A$ with a unital ring homomorphism $R\to A$ whose image is central. ([[def-algebra-over-a-commutative-ring]]).

[F5] A unital left $R$-module is an abelian group $M$ with a bilinear action $R\times M\to M$, $ (r,m)\mapsto rm$, satisfying $1m=m$ and $(rs)m=r(sm)$. ([[def-left-and-right-modules]]).

[F6] A composition series of a left module is a finite chain whose factors are simple; a module is of finite length when such a series exists. ([[def-composition-series-and-length-of-a-module]]).

[F7] A left $R$-module is semisimple when it is an internal direct sum of simple submodules, the empty direct sum included. ([[def-semisimple-module]]).

[F8] A unital ring $R$ is semisimple when its left regular module ${}_RR$ is semisimple. ([[def-semisimple-ring]]).

[F9] For a finite-length module, the direct-sum, sum-of-simples and complement characterizations of semisimplicity are equivalent without any choice principle. ([[thm-finite-length-semisimple-module-characterizations]]).

[A1] A $\mathbb C$-linear map out of a vector space is determined by its values on a basis, and conversely arbitrary values on a basis extend uniquely to a $\mathbb C$-linear map.

## Proof

**Proof technique:** direct.

1.1 On basis elements, $(u_qu_r)u_s=\alpha(q,r)\alpha(qr,s)u_{qrs}$ and $u_q(u_ru_s)=\alpha(r,s)\alpha(q,rs)u_{qrs}$ by [F1], and these scalars are equal; since the product is bilinear and the $u_q$ span $A$, the product is associative. [F1, A1, algebra]

1.2 On basis elements $u_1u_q=\alpha(1,q)u_q=u_q$ and $u_qu_1=\alpha(q,1)u_q=u_q$ by [F1]; by bilinearity $u_1a=a=au_1$ for every $a\in A$, so $u_1$ is a two-sided identity. [F1, A1]

1.3 Conversely, let $P$ be a normalized projective representation of $Q$ on a nonzero finite-dimensional space $V$ with factor set $\alpha$. Define $a\cdot v$ for $a=\sum_q\lambda_qu_q$ by $a\cdot v:=\sum_q\lambda_qP(q)v$. This is well defined and $\mathbb C$-bilinear by [A1], and it satisfies $u_1\cdot v=P(1)v=v$ and $(u_qu_r)\cdot v=\alpha(q,r)u_{qr}\cdot v=\alpha(q,r)P(qr)v=P(q)P(r)v=u_q\cdot(u_r\cdot v)$ by [F2]; both sides extend by linearity to arbitrary $a\in A$, so [F5] makes $V$ a left $A$-module. [F1, F2, F5, A1]

2.1 Suppose $M$ has finite dimension over $\mathbb C$ and let $W\le M$ be an $A$-submodule. On $M$ define $P(q)m:=u_qm$, using the scalar action $\lambda m=(\lambda u_1)m$. These operators are $\mathbb C$-linear since $u_q(\lambda u_1)=(\lambda u_1)u_q$. The module law gives $P(1)=\operatorname{id}_M$ and $P(q)P(r)=\alpha(q,r)P(qr)$; [F1] and the cocycle identity at $(q,q^{-1},q)$ give $P(q)P(q^{-1})=P(q^{-1})P(q)=\alpha(q,q^{-1})\operatorname{id}_M$, so $P(q)^{-1}=\alpha(q,q^{-1})^{-1}P(q^{-1})$. This holds also for $M=0$. Choose a $\mathbb C$-linear projection $\pi:M\to W$, which exists by [A1] applied to a basis of $W$ extended to a basis of $M$. Averaging its conjugates, define $\bar\pi:=\frac1{|Q|}\sum_{q\in Q}P(q)\pi P(q)^{-1}$. [F1, F5, A1, step 1.1, step 1.2]

2.2 Steps 1.1 and 1.2 make $A$ a unital associative ring, and $\lambda\mapsto\lambda u_1$ is a unital ring homomorphism $\mathbb C\to A$ with central image, so $A$ is a $\mathbb C$-algebra in the sense of [F4]; by [F1] and [F3] each $u_q$ has the two-sided inverse $\alpha(q,q^{-1})^{-1}u_{q^{-1}}$. [F1, F3, F4, step 1.1, step 1.2]

3.1 Each $P(q)\pi P(q)^{-1}$ maps $M$ into $W$, because $W$ is $A$-stable and $P(q)$ is invertible; hence $\bar\pi(M)\subseteq W$, and $\bar\pi$ fixes $W$ pointwise because $P(q)\pi P(q)^{-1}w=P(q)P(q)^{-1}w=w$ for $w\in W$. [F5, step 2.1, given]

3.2 For every $r\in Q$, $P(r)\bar\pi P(r)^{-1}=\frac1{|Q|}\sum_qP(r)P(q)\pi P(q)^{-1}P(r)^{-1}=\frac1{|Q|}\sum_q\alpha(r,q)\alpha(r,q)^{-1}P(rq)\pi P(rq)^{-1}=\frac1{|Q|}\sum_{q'}P(q')\pi P(q')^{-1}=\bar\pi$ by step 2.1 and reindexing $q'=rq$, so $\bar\pi$ commutes with every $P(r)$ and hence with the action of $A$. [step 2.1, algebra]

3.3 Let $M\ne0$ be a finite-dimensional left $A$-module and let $P(q)$ be the action of $u_q$ on $M$, which is a $\mathbb C$-linear map by [F5]. Then $P(1)=\operatorname{id}_M$ by [F5] and [F1], and $P(q)P(r)=\alpha(q,r)P(qr)$ because the action respects products and $u_qu_r=\alpha(q,r)u_{qr}$; each $P(q)$ has inverse $\alpha(q,q^{-1})^{-1}P(q^{-1})$ by step 2.2, so $P(q)\in\operatorname{GL}(M)$. Thus every nonzero finite-dimensional $A$-module gives a normalized projective representation with factor set $\alpha$. [F1, F5, A1, step 2.2]

4.1 Steps 3.1 and 3.2 show that $M=W\oplus\ker\bar\pi$: the average is a surjection onto $W$ fixing $W$, so it is a module map with image $W$ and kernel a complement. Therefore every submodule of a finite-dimensional $A$-module has a complementary submodule. [step 3.1, step 3.2, F5]

4.2 The two constructions of steps 3.3 and 1.3 are mutually inverse: starting from $M$, the module built from $P$ acts as $u_q\cdot m=P(q)m$, which is the original action, and starting from $P$, the representation of the built module sends $q$ to the action of $u_q$, which is $P(q)$. Hence nonzero finite-dimensional left $A$-modules correspond bijectively to normalized projective $Q$-representations with factor set $\alpha$. [step 3.3, step 1.3, A1]

5.1 A finite-dimensional $A$-module has finite length: a strictly increasing chain of submodules has strictly increasing complex dimensions, so no chain of submodules can be longer than $1+\dim_{\mathbb C}M$ terms, and a maximal chain is a composition series in the sense of [F6]. By [F9], the complement property of step 4.1 makes $M$ a direct sum of simple submodules, that is, semisimple in the sense of [F7]. [F6, F7, F9, step 4.1, algebra]

5.2 The zero space carries the unique $A$-module structure, all operators being zero, and it is the zero object of the category of left $A$-modules: the zero map is the only map from it and the only map to it, and both are module maps. It is therefore a module for every coefficient cocycle $\alpha$, while it determines no factor set, which is why step 4.2 is stated for nonzero modules. [F2, given]

6.1 Applying step 5.1 to the left regular module ${}_AA$, which is finite-dimensional of dimension $|Q|$, shows that $A$ is a semisimple ring in the sense of [F8], and step 5.1 shows in addition that every finite-dimensional left $A$-module is semisimple. [F8, step 5.1, given] ∎
