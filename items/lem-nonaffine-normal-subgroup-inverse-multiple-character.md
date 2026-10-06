---
id: lem-nonaffine-normal-subgroup-inverse-multiple-character
kind: lemma
title: "A character of a normal subgroup admits an inverse multiple in a group representation"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-high-frobenius-smooth-image, thm-nonempty-regular-locus-reduced-variety-perfect-field, thm-regular-equals-smooth-over-perfect-field, def-embedding-dimension-and-regular-local-ring, thm-regular-locus-is-open-variety, thm-regular-local-rings-are-domains-and-cohen-macaulay, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "dbd60b5d312ccc165a8b55abdf1aaaf130358dd26169a6a8250531fe831b0164"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Theorem 3.23, Propositions 4.23–4.25, Lemma 5.16, pp.71,93–94,102–103"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume AC. Let $k$ be algebraically closed, $G$ an affine finite-type $k$-group scheme and $H\subset G$ a closed normal subgroup scheme. If a character $\chi:H\to\mathbb G_m$ occurs in a finite-dimensional representation $V$ of $G$ (there is a nonzero vector spanning an $H$-stable line of character $\chi$), then $\chi^{-m}$ occurs in a finite-dimensional representation of $G$ for some integer $m>0$. Both $G$ and $H$ may be nonsmooth.

## Facts & Assumptions

[F1] High relative Frobenius has smooth scheme-theoretic image. ([[lem-nonaffine-high-frobenius-smooth-image]])

[F2] A nonempty reduced finite-type scheme over a perfect field has a nonempty regular locus, and regularity equals smoothness. The regular locus of any finite-type scheme over a perfect field is open. A Noetherian local ring is regular when its dimension equals the dimension of its maximal ideal modulo its square, and regular local rings are domains. ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]], [[def-embedding-dimension-and-regular-local-ring]], [[thm-regular-locus-is-open-variety]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

[F3] Closed points of finite-type schemes over an algebraically closed field are rational; a function on a reduced such affine scheme vanishing at all closed points is zero. The second assertion follows from the first by applying it to the nonempty principal open where a proposed nonzero function is invertible. ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

## Proof

**Given:** AC, $G,H,V,\chi$ and a line $L\subset V$ of character $\chi$.

1.1 First record the characteristic-zero reducedness needed below. Put $A=k[G]$, $\mathfrak m=\ker\epsilon$. The reduction of $G$ is smooth: by [F2] it has a regular rational point, and translations by rational points preserve the reduction and carry that point to the identity and then to every closed point. The open regular locus therefore contains all closed points and is the whole reduction, by [F3]. For any nilpotent $a\in A$ vanishing in $A_{\mathfrak m}$, localization of $A/\mathfrak m^2$ at its unique maximal ideal is an isomorphism, so $a\in\mathfrak m^2$. Otherwise choose the least $n\ge2$ with $a^n=0$ in $A_{\mathfrak m}$. Multiplying $a$ by some $s\notin\mathfrak m$ arranges $a^n=0$ already in $A$ and $a^{n-1}\ne0$ in $A_{\mathfrak m}$. This replacement does not change whether $a\in\mathfrak m^2$, since $s$ is invertible modulo $\mathfrak m^2$. The counit identities give $\Delta(a)=a\otimes1+1\otimes a+y$ with $y\in\mathfrak m\otimes\mathfrak m$. Expanding $\Delta(a)^n=0$ modulo $A\otimes\mathfrak m^2$ gives $n a^{n-1}\otimes\bar a\in a^{n-1}\mathfrak m\otimes(A/\mathfrak m^2)$. Here $a^{n-1}\notin a^{n-1}\mathfrak m$: otherwise $(1-t)a^{n-1}=0$ for some $t\in\mathfrak m$, contradicting its nonzero localization. Since $n\ne0$ in characteristic zero, projecting the first tensor factor modulo $a^{n-1}\mathfrak m$ proves $\bar a=0$. Thus all nilpotents belong to $\mathfrak m^2$. The cotangent dimension of $G$ at the identity equals that of its smooth reduction, and its local dimension is also unchanged by reduction. By [F2] its local ring at the identity is regular. Translations and the openness of the regular locus supplied by [F2] make $G$ regular everywhere; [F2] makes it smooth, hence reduced. [F2, F3, given, algebra]

1.2 For any affine group scheme, distinct characters are linearly independent in its coordinate ring. Indeed their coordinate functions are group-like elements $b$ with $\Delta(b)=b\otimes b$ and $\epsilon(b)=1$. If one were a linear combination $b=\sum_i c_i b_i$ of independent other group-like elements, comparison of $\Delta(b)$ would give $c_i^2=c_i$, $c_ic_j=0$ for $i\ne j$, and $\sum_i c_i=1$. Over a field precisely one coefficient is one, contradicting distinctness. Consequently the character eigenspaces in any comodule have direct sum: apply its coaction to a finite relation among weight vectors, then project the coordinate factor onto each independent group-like function. This applies to nonsmooth $H$. [given, algebra]

2.1 Suppose $G$ is reduced. Let $W\subset V$ be the sum of all $H$-character eigenspaces. Normality says every $g\in G(k)$ sends an $H$-weight vector to another $H$-weight vector, since $h(gv)=g(g^{-1}hg)v$ holds after every algebra extension. Thus $G(k)$ preserves $W$. In a basis extending one of $W$, the matrix coefficients for the induced map $W\to V/W$ vanish at all rational points and hence vanish by [F3]; $W$ is a $G$-subrepresentation. By step 1.2 it is the direct sum of its $H$-weight spaces. Choose a complement to $L$ in its finite-dimensional weight space and add the other weight spaces. This makes $L$ an $H$-module direct summand of $W$, so the embedded dual line in $W^*$ has character $\chi^{-1}$. Step 1.1 proves that this case always applies in characteristic zero. [F3, step 1.1, step 1.2, construct, algebra]

3.1 In characteristic $p>0$, choose $q=p^r$ with the Frobenius image $I\subset G^{(r)}$ smooth by [F1]. Inside $\operatorname{Sym}^qV$ take the span $U$ of the pure powers $v^q$. If $e_i$ is a basis of $V$, the $e_i^q$ form a basis of $U$, and its representation matrix is $(a_{ij}^q)$ when that on $V$ is $(a_{ij})$. In particular it factors through $I$: these coefficients are pullbacks of the twisted matrix coefficients on $G^{(r)}$, restricted to its scheme-theoretic image. The Hopf identities hold on $I$ because $k[I]\to k[G]$ and its tensor square are injective. The line $L^q\subset U$ has $H$-character $\chi^q$. Let $W$ be the sum of the $H$-character eigenspaces in $U$. Normality makes $W$ stable under $G(k)$ as in step 2.1. Frobenius is a universal homeomorphism onto $I$, and its closed points over algebraically closed $k$ are rational, so $G(k)\to I(k)$ is onto. Therefore $I(k)$ preserves $W$; since $I$ is reduced, [F3] makes $W$ stable under $I$ as a scheme, hence under $G$. Step 1.2 again makes $L^q$ an $H$-module direct summand. Its dual occurs in the $G$-representation $W^*$ with character $\chi^{-q}$. This proves the assertion with $m=q$. The pure-power subspace is essential: the entire tensor power need not be killed by the Frobenius kernel. AC enters through [F1]–[F3]. [F1, F3, step 1.2, step 2.1, construct, algebra] ∎
