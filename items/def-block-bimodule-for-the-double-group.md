---
id: def-block-bimodule-for-the-double-group
kind: definition
title: Block bimodule for the double group
deps: [def-p-blocks-by-primitive-central-idempotents, def-splitting-p-modular-system-for-a-finite-group]
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
---

## Definition

Fix a splitting $p$-modular system for a finite group $G$, with residue field $k$ of characteristic $p$, as in [[def-splitting-p-modular-system-for-a-finite-group]]. Let $b\in Z(kG)$ be a primitive central idempotent—specifically, a residue-field block idempotent in the $kG$ branch of [[def-p-blocks-by-primitive-central-idempotents]]. The **block bimodule** is $B=kGb$, viewed as a left $k[G\times G]$-module by $(x,y)v=xvy^{-1}$. This is an action because $(x,y)((x',y')v)=xx'v(y')^{-1}y^{-1}=(xx',yy')v$ and $(1,1)v=v$. Centrality of $b$ makes $B$ stable and the projection $v\mapsto vb$ splits $kG=B\oplus kG(1-b)$ as bimodules. We write $\Delta H=\{(h,h):h\in H\}$ for a subgroup $H\le G$.

This bimodule is nonzero and indecomposable. Indeed a bimodule endomorphism $T$ is determined by $c=T(b)$: for $v\in B$, $T(v)=vc=cv$, so $c\in Z(B)=bZ(kG)$, and conversely central multiplication is a bimodule endomorphism. A direct-sum decomposition would give an idempotent endomorphism other than $0,1$, hence a central idempotent $c$ other than $0,b$. Then $b=c+(b-c)$ is a nontrivial orthogonal central decomposition, contradicting primitivity. More precisely the endomorphism algebra is local: for a central $c$, stabilized kernels and images of multiplication by $c$ split $B$ into bimodules, so indecomposability makes $c$ either invertible or nilpotent. The nonunits form an ideal, since in this commutative finite algebra sums of nilpotents are nilpotent by the binomial expansion and multiples of nilpotents are nilpotent. This ideal contains every proper ideal and is the unique maximal ideal.

## Sources

Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241. Local argument and conventions as displayed above.
