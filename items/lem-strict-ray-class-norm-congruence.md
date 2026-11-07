---
id: lem-strict-ray-class-norm-congruence
kind: lemma
title: "Norm congruence for strict ray classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-absolute-norm-of-an-ideal
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ideal-norm-is-multiplicative
  - def-archimedean-embeddings-and-number-field-signature
  - thm-number-field-integral-ideal-factorisation-in-zf
  - cor-norm-of-a-prime-ideal
  - thm-field-norm-and-trace-by-embeddings
dependency_level: 0
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet, Values of Abelian L-Functions at Negative Integers over Totally Real Fields, Inventiones Mathematicae 59 (1980), 227–286"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "Proposition 2.11 and complete proof, printed p. 241."
verification: {}
---
## Statement

Let $K$ be a totally real number field with ring of integers $\mathcal O_K$. Let $f\ge1$ be a rational integer and let $\mathfrak a,\mathfrak b$ be nonzero fractional ideals. Suppose that $\mathfrak a\mathfrak b^{-1}=(\alpha)$ for a totally positive $\alpha\in K^\times$ with $\alpha-1\in f\mathfrak b^{-1}$. Let $\mathfrak d$ be a nonzero integral ideal such that $\mathfrak d\mathfrak a$ and $\mathfrak d\mathfrak b$ are integral. Then their positive absolute ideal norms satisfy
$$N(\mathfrak a)-N(\mathfrak b)\in N(\mathfrak d^{-1})f\,\mathbb Z,$$
where the norm on fractional ideals is the multiplicative extension of the integral-ideal norm and $N(\mathfrak d^{-1})=N(\mathfrak d)^{-1}$.

## Facts & Assumptions

**Given:** $K,f,\mathfrak a,\mathfrak b,\mathfrak d$ as in the statement.

[F1] Absolute ideal norm is multiplicative on nonzero integral ideals, and for $0\ne\alpha\in\mathcal O_K$, $N((\alpha))=|N_{K/\mathbb Q}(\alpha)|$. Extending multiplicatively defines the positive rational norm of a fractional ideal; denominator clearing gives $N((\alpha))=N_{K/\mathbb Q}(\alpha)>0$ for every totally positive $\alpha\in K^\times$. [[def-absolute-norm-of-an-ideal]] [[thm-ideal-norm-is-multiplicative]] [[thm-principal-ideal-norm-is-absolute-field-norm]]

[F2] Every nonzero integral ideal factors uniquely into finitely many prime ideals; if $\mathfrak p\mid(\ell)$, its norm is $\ell^{f_\mathfrak p}$, and the exponent of $\mathfrak p$ in $(\ell)$ is its ramification index $e_\mathfrak p$. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[cor-norm-of-a-prime-ideal]] [[thm-field-norm-and-trace-by-embeddings]]

[F3] The determinant of multiplication by $\alpha$ on the $\mathbb Q$-vector space $K$ is $N_{K/\mathbb Q}(\alpha)$. [[thm-field-norm-and-trace-by-embeddings]]

## Proof

**Given:** The hypotheses above.

1.1 First suppose $\mathfrak a,\mathfrak b$ are integral. For any integral ideal $\mathfrak D\supseteq(f)$, if $\mathfrak b\subseteq\mathfrak D$, then $(\alpha-1)\mathfrak b\subseteq(f)$ and hence $\mathfrak a=\alpha\mathfrak b\subseteq\mathfrak b+(f)\subseteq\mathfrak D$. Also $\alpha^{-1}-1\in f\mathfrak a^{-1}$, so reversing $\mathfrak a,\mathfrak b$ gives the converse. Thus $\mathfrak g=(f,\mathfrak a)=(f,\mathfrak b)$. The ideals $\mathfrak a'=\mathfrak a\mathfrak g^{-1}$ and $\mathfrak b'=\mathfrak b\mathfrak g^{-1}$ are integral and coprime to $(f)$. They remain congruent modulo $f\mathfrak g^{-1}$, hence modulo $f'\mathcal O_K$, where $f'$ is the largest positive integer such that $f\mathfrak g^{-1}\subseteq f'\mathcal O_K$. For each rational prime $\ell\mid f$, put $e=v_\ell(f)$ and $n_\mathfrak p=v_\mathfrak p(\mathfrak g)$ for $\mathfrak p\mid\ell$. By [F2], $v_\ell(f')=\min_{\mathfrak p\mid\ell}\lfloor e-n_\mathfrak p/e_\mathfrak p\rfloor=e-\max_{\mathfrak p\mid\ell}\lceil n_\mathfrak p/e_\mathfrak p\rceil$, while $v_\ell(N\mathfrak g)=\sum_{\mathfrak p\mid\ell}f_\mathfrak p n_\mathfrak p\ge\max_{\mathfrak p\mid\ell}\lceil n_\mathfrak p/e_\mathfrak p\rceil$. Thus $f\mid f'N(\mathfrak g)$. [given, F2, algebra]

1.2 The strict congruence of $\mathfrak a,\mathfrak b$ induces the congruence of $\mathfrak a',\mathfrak b'$ modulo $f'$. Since both are coprime to $f'$, their principal ratio has a generator $\alpha$ which is $1$ modulo $f'$ in every completion above a rational prime dividing $f'$. The determinant of multiplication by $\alpha$ on $K\otimes_\mathbb Q\mathbb Q_\ell$ is $N_{K/\mathbb Q}(\alpha)$, so $N_{K/\mathbb Q}(\alpha)\equiv1\pmod{\ell^{v_\ell(f')}}$ for every $\ell\mid f'$. Thus $N(\mathfrak a')=N(\alpha)N(\mathfrak b')\equiv N(\mathfrak b')\pmod{f'}$. Multiplying by $N(\mathfrak g)$ and using $f\mid f'N(\mathfrak g)$ proves $N(\mathfrak a)-N(\mathfrak b)\in f\mathbb Z$ in the integral case. [given, F1, F2, step 1.1, algebra]

2.1 For arbitrary fractional $\mathfrak a,\mathfrak b$, the ideals $\mathfrak d\mathfrak a$ and $\mathfrak d\mathfrak b$ are integral and remain strictly congruent modulo $f$ (indeed the defining congruence strengthens after multiplication by $\mathfrak d$). The integral case gives $N(\mathfrak d\mathfrak a)-N(\mathfrak d\mathfrak b)\in f\mathbb Z$. By multiplicativity [F1], this difference is $N(\mathfrak d)(N(\mathfrak a)-N(\mathfrak b))$. Dividing by $N(\mathfrak d)>0$ proves the asserted denominator precision. [F1, step 1.2, algebra] ∎

## Statement references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-fractional-ideal]]

[[def-absolute-norm-of-an-ideal]]

[[thm-principal-ideal-norm-is-absolute-field-norm]]

[[thm-ideal-norm-is-multiplicative]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[cor-norm-of-a-prime-ideal]]

[[thm-field-norm-and-trace-by-embeddings]]

[Deligne and Ribet, Proposition 2.11, p. 241](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
