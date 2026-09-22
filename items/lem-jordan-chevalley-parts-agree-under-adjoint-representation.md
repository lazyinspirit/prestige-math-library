---
id: lem-jordan-chevalley-parts-agree-under-adjoint-representation
kind: lemma
title: Jordan–Chevalley parts agree under the adjoint representation
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-abstract-jordan-decomposition-in-a-lie-algebra, thm-additive-jordan-chevalley-decomposition, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §2"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra and let $x\in\mathfrak g$.

(i) If $x=x_s+x_n$ is an abstract Jordan decomposition of $x$, then the
additive Jordan–Chevalley parts of $\operatorname{ad}_x$ are
$\operatorname{ad}_{x_s}$ and $\operatorname{ad}_{x_n}$.

(ii) Conversely, if
$\operatorname{ad}_x=S+N$ is the additive Jordan–Chevalley decomposition of
$\operatorname{ad}_x$, then there are unique $y_s,y_n\in\mathfrak g$ with
$S=\operatorname{ad}_{y_s}$ and $N=\operatorname{ad}_{y_n}$. They satisfy
$y_s+y_n=x$, $[y_s,y_n]=0$, with $\operatorname{ad}_{y_s}$ semisimple and
$\operatorname{ad}_{y_n}$ nilpotent; consequently $x=y_s+y_n$ is an abstract
Jordan decomposition of $x$, and it is the only one.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, and an element $x\in\mathfrak g$.

[A1] The Axiom of Choice is the principle of [[def-axiom-of-choice]]; it is used in this lemma only through [L1].

[L1] Every endomorphism $T$ of a finite-dimensional vector space over a perfect field has a unique commuting semisimple-plus-nilpotent decomposition $T=T_s+T_n$, and $T_s,T_n$ are polynomials in $T$ ([[thm-additive-jordan-chevalley-decomposition]]).

[L2] Every derivation of a finite-dimensional semisimple Lie algebra in characteristic zero is inner, and the representing element is unique ([[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]]).

[L3] A finite-dimensional semisimple complex Lie algebra is centerless and perfect, so $\operatorname{ad}$ is injective ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L4] An abstract Jordan decomposition of $x$ is a decomposition $x=x_s+x_n$ with $[x_s,x_n]=0$, $\operatorname{ad}_{x_s}$ semisimple and $\operatorname{ad}_{x_n}$ nilpotent ([[def-abstract-jordan-decomposition-in-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $x=x_s+x_n$ is an abstract Jordan decomposition. Then $\operatorname{ad}_x=\operatorname{ad}_{x_s}+\operatorname{ad}_{x_n}$ by linearity of $\operatorname{ad}$, the two summands commute because $[\operatorname{ad}_{x_s},\operatorname{ad}_{x_n}]=\operatorname{ad}_{[x_s,x_n]}=0$, and by [L4] the first is semisimple while the second is nilpotent. The uniqueness assertion of [L1] therefore identifies them with the additive Jordan–Chevalley parts of $\operatorname{ad}_x$. This proves (i). [A1, L1, L4, algebra]

1.2 Now let $\operatorname{ad}_x=S+N$ be the additive Jordan–Chevalley decomposition of the derivation $T=\operatorname{ad}_x$; by [L1] there are polynomials $p,q\in\mathbb C[t]$ with $S=p(T)$ and $N=q(T)$. We show that $S$ is a derivation and that $S$ acts on the generalized eigenspace of $T$ for $\lambda$ as multiplication by $\lambda$. The generalized eigenspaces $\mathfrak g_\lambda=\{y:(T-\lambda)^k y=0\text{ for some }k\}$ satisfy $\mathfrak g=\bigoplus_\lambda\mathfrak g_\lambda$ and $[\mathfrak g_\lambda,\mathfrak g_\mu]\subseteq\mathfrak g_{\lambda+\mu}$: the second claim follows from the binomial expansion $(T-\lambda-\mu)^n[y,z]=\sum_{i+j=n}\binom ni[(T-\lambda)^i y,(T-\mu)^j z]$. Each $\mathfrak g_\lambda$ is invariant under $T$, hence under $p(T)=S$. On $\mathfrak g_\lambda$ the operator $T$ equals $\lambda\cdot1$ plus a commuting nilpotent operator, so $p(T)=p(\lambda)\cdot1+(\text{nilpotent})$ there; since $S$ is semisimple and restricts semisimply to the invariant subspace $\mathfrak g_\lambda$, this forces $S|_{\mathfrak g_\lambda}=p(\lambda)\cdot1$. On the other hand $S-\lambda\cdot1=(T-\lambda\cdot1)-N$ is a difference of two commuting nilpotent operators on $\mathfrak g_\lambda$, hence nilpotent; comparing with the scalar operator $(p(\lambda)-\lambda)\cdot1$ gives $p(\lambda)=\lambda$. Therefore $S|_{\mathfrak g_\lambda}=\lambda\cdot1$, and for $y\in\mathfrak g_\lambda$, $z\in\mathfrak g_\mu$ one has $S[y,z]=(\lambda+\mu)[y,z]=[\lambda y,z]+[y,\mu z]=[Sy,z]+[y,Sz]$ because $[y,z]\in\mathfrak g_{\lambda+\mu}$. Thus $S$ is a derivation; $T$ is a derivation by the Jacobi identity, so $N=T-S$ is a derivation too. [A1, L1, algebra]

2.1 By [L2] there are unique $y_s,y_n\in\mathfrak g$ with $S=\operatorname{ad}_{y_s}$ and $N=\operatorname{ad}_{y_n}$. Then $\operatorname{ad}_{y_s+y_n}=S+N=\operatorname{ad}_x$, so $y_s+y_n=x$ by injectivity of $\operatorname{ad}$ [L3]; also $\operatorname{ad}_{[y_s,y_n]}=[S,N]=0$, so $[y_s,y_n]=0$ by [L3]; and $\operatorname{ad}_{y_s}=S$ is semisimple while $\operatorname{ad}_{y_n}=N$ is nilpotent. Hence $x=y_s+y_n$ is an abstract Jordan decomposition by [L4]. [L2, L3, L4, step 1.2]

3.1 If $x=u+v$ is any abstract Jordan decomposition, then $\operatorname{ad}_u,\operatorname{ad}_v$ is a commuting semisimple-plus-nilpotent decomposition of $\operatorname{ad}_x$ by step 1.1's computation, so uniqueness in [L1] gives $\operatorname{ad}_u=S=\operatorname{ad}_{y_s}$ and $\operatorname{ad}_v=N=\operatorname{ad}_{y_n}$; injectivity of $\operatorname{ad}$ [L3] gives $u=y_s$ and $v=y_n$. Hence the decomposition of (ii) is unique. If $\mathfrak g=0$ then $x=0=y_s=y_n$ and every assertion holds with the zero endomorphism, which is both semisimple and nilpotent; no nonempty choice is made anywhere in this argument, the Axiom of Choice being used only through the appeal to [L1]. [A1, L1, L3, step 1.1, 3.1] ∎
