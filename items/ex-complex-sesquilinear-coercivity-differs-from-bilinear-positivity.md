---
id: "ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity"
kind: "example"
title: "Complex sesquilinear coercivity differs from bilinear positivity"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "def-real-and-complex-inner-product-space"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "thm-lax-milgram"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, the real bilinear Lax–Milgram Lemma (hypotheses (i)–(iii)), printed p. 71"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, the real Hilbert-space bilinear form of Theorem 4.20, printed p. 103"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 5.3, Theorem 5.6 and Corollary 5.8, printed pp. 138–140: real bilinear coercivity background. The complex sesquilinear/bilinear distinction is computed directly here."
---

## Example

On $H=\mathbb C$ define $a(u,v):=u\overline v$ and $b(u,v):=uv$. Then $a$ is sesquilinear in the convention of [[def-bounded-coercive-and-symmetric-sesquilinear-forms]] (linear in the first argument, conjugate-linear in the second), bounded with $M=1$, and coercive with constant $\alpha=1$ because $a(u,u)=|u|^2$. The expression $b$ is bilinear, not conjugate-linear in the second argument, and it fails the coercivity condition: $b(i,i)=-1$, so $\operatorname{Re}b(u,u)\ge\alpha|u|^2$ fails at $u=i$ for every $\alpha>0$. More generally $b(u,u)=u^2$ is not real for $u\notin\mathbb R\cup i\mathbb R$, and its real part is negative, for example, at $u=1+2i$, since $(1+2i)^2=-3+4i$. Hence the conjugation in the second slot is not cosmetic: the complex Lax--Milgram hypotheses cannot be applied to this bilinear pairing $b$, and the real bilinear convention of [[def-bounded-coercive-and-symmetric-sesquilinear-forms]] is genuinely a different hypothesis. This tests exactly the convention on which [[thm-lax-milgram]] and [[lem-form-to-bounded-operator-by-hilbert-riesz]] depend, and complements the real-form sources [Si] and [H], which state real bilinear versions.

## Facts & Assumptions

**Given:** The Hilbert space $H=\mathbb C$ with its usual inner product and $|z|$ the complex modulus; the pairings $a(u,v)=u\overline v$ and $b(u,v)=uv$.

[F1] Sesquilinearity, boundedness and coercivity definitions: $a$ is linear in the first slot and conjugate-linear in the second with $|a(u,v)|\le M|u||v|$, and coercive with constant $\alpha$ when $\operatorname{Re}a(u,u)\ge\alpha|u|^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F2] Scalar facts: $u\overline u=|u|^2\ge0$, $|u\overline v|=|u||v|$, $\overline{i}=-i$ and $i^2=-1$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] Lax--Milgram and the form-to-operator lemma are stated for sesquilinear forms in the conjugate-linear-second-slot convention ([[thm-lax-milgram]], [[lem-form-to-bounded-operator-by-hilbert-riesz]]).



## Proof

1.1 The sesquilinear form $a$: for scalars $\lambda$, $a(\lambda u,v)=\lambda u\overline v=\lambda a(u,v)$ and $a(u,\lambda v)=u\overline{\lambda v}=\overline\lambda\,a(u,v)$, so $a$ is linear in the first argument and conjugate-linear in the second; $|a(u,v)|=|u||v|\le1\cdot|u||v|$ gives the bound $M=1$, and $a(u,u)=|u|^2$ gives coercivity with $\alpha=1$. [F1, F2]

1.2 The bilinear pairing $b$ is not of this type: $b(\lambda u,v)=\lambda b(u,v)=b(u,\lambda v)$, so $b$ is bilinear; but with $u=v=1$ and $\lambda=i$, $b(1,i)=i\ne-i=\overline i\,b(1,1)$, so $b$ is not conjugate-linear in the second slot. [F2, F1]

2.1 $b$ fails coercivity: $b(i,i)=i^2=-1$ has real part $-1$, while $\alpha|i|^2=\alpha>0$ for every $\alpha>0$; hence $\operatorname{Re}b(u,u)\ge\alpha|u|^2$ fails at $u=i$ for every $\alpha$. More generally $b(u,u)=u^2$ is not real unless $u\in\mathbb R\cup i\mathbb R$. [F2, step 1.2, algebra]

3.1 Consequences: neither Lax--Milgram nor the representation lemma applies to this $b$, since it is not sesquilinear. More generally, a complex form that is both bilinear and sesquilinear satisfies $ic(u,v)=c(u,iv)=-ic(u,v)$, hence is the zero form. The zero form satisfies the bounded sesquilinear hypotheses of the representation lemma; on a nonzero space it cannot be coercive, but on $H=\{0\}$ it is coercive with every $\alpha>0$ and satisfies the Lax--Milgram form hypotheses. Thus the conjugation convention matters, with this zero-form exception. [F1, F2, F3, step 1.2, step 2.1, algebra] ∎