---
id: lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator
kind: lemma
title: Only the highest dot orbit can occur in the integrable numerator
deps: ["lem-the-shifted-integrable-character-numerator-is-weyl-skew", "lem-casimir-constrained-verma-character-expansion", "def-kac-moody-integral-and-dominant-integral-weights", "def-kac-moody-real-coroot-inversions", "lem-kac-moody-reduced-words-and-coroot-signs", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lemma 10.1.2 and Theorem 10.2.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Lemma 11.2.5 and Theorem 11.2.1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For finite symmetrizable $A$ and dominant integral $\Lambda$, the constrained Verma expansion of $L(\Lambda)$ has coefficients $c_\mu=0$ except at $\mu=w(\Lambda+\rho)-\rho$, where $c_\mu=\det(w)$. These orbit weights are distinct and coefficientwise locally finite. There is no additional dominant or imaginary-cone contribution.

## Facts & Assumptions

**Given:** Put $\lambda=\Lambda+\rho$ and $N=D\operatorname{ch}L(\Lambda)$.

[F1] $N$ is Weyl skew by [[lem-the-shifted-integrable-character-numerator-is-weyl-skew]].

[F2] The constrained expansion, its PBW multiplication and $c_\Lambda=1$ are [[lem-casimir-constrained-verma-character-expansion]]: $N=\sum_{\mu\le\Lambda}c_\mu e^{\mu+\rho}$ and nonzero coefficients satisfy $(\mu+\rho)^2=\lambda^2$.

[F3] Integral labels and dominance are [[def-kac-moody-integral-and-dominant-integral-weights]].

[F4] Length and real coroots are [[def-kac-moody-real-coroot-inversions]].

[F5] Reduced words and the positive-root length criterion are [[lem-kac-moody-reduced-words-and-coroot-signs]].

[F6] The form satisfies $(\alpha_i,\xi)=d_i\xi(h_i)$, $d_i>0$, by [[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]].

## Proof

1.1 Let $\eta=\lambda-\beta$ have a nonzero coefficient, so $\beta\in Q^+$ by F2. All its simple labels are integers by F3 and the integral Cartan matrix. If $\eta(h_i)=0$, reflection fixes $\eta$ and F1 makes its coefficient its negative, impossible over $\mathbb Z$. If $\eta(h_i)<0$, reflect: $s_i\eta=\eta+k\alpha_i$ for the positive integer $k=-\eta(h_i)$. Its coefficient is still nonzero by F1, so F2 implies $\beta-k\alpha_i\in Q^+$. Its height is smaller by $k$. Repeatedly choosing the least negative index terminates in finitely many steps, at a support weight $\eta'$ with every label strictly positive. This termination uses the actual cone bound on the orbit's support, not a claim that every integral weight can be moved to the dominant chamber. [F1, F2, F3, algebra]

2.1 Write $\eta'=\lambda-\gamma$, $\gamma=\sum_i k_i\alpha_i\in Q^+$. F2 says $\eta'^2=\lambda^2$. But F6 gives $$\lambda^2-\eta'^2=(\gamma,\lambda+\eta')=\sum_i k_i d_i\bigl(\lambda(h_i)+\eta'(h_i)\bigr).$$ Since $\lambda(h_i)=\Lambda(h_i)+1\ge1$ and $\eta'(h_i)>0$, this is strictly positive unless every $k_i=0$. Hence $\eta'=\lambda$. Step 1.1 now puts every support weight on the orbit of $\lambda$. The comparison is between real sums of labels even if complementary Cartan coordinates are complex. No positive-definiteness assumption was made. [F2, F3, F6, step 1.1, algebra]

3.1 For a reduced word $w=s_{i_1}\cdots s_{i_t}$, telescoping gives $$\lambda-w\lambda=\sum_{j=1}^t\lambda(h_{i_j})s_{i_1}\cdots s_{i_{j-1}}\alpha_{i_j}.$$ Every prefix is reduced, and its next root is positive by F5. Every scalar is an integer at least one by F3. Thus the difference belongs to $Q^+$ and has height at least $t=\ell(w)$, using F4's length convention. If $w\lambda=\lambda$, this forces $t=0$, so the stabilizer is trivial. A fixed height bound allows only finitely many words in the finite alphabet, proving local finiteness. F2 gives coefficient one at $\lambda$; F1 then gives exactly $\det(w)$ at $w\lambda$. Together with step 2.1 this proves all assertions. Empty words and the empty simple system give the sole term of coefficient one. No infinite choices occur. [F1, F2, F3, F4, F5, step 2.1, algebra] ∎
