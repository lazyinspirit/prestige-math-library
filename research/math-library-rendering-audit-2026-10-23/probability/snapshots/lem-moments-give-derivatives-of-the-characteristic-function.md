---
id: "lem-moments-give-derivatives-of-the-characteristic-function"
kind: "lemma"
title: "Moments give derivatives of the characteristic function"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-dominated-convergence", "thm-complex-exponential-addition-and-real-extension", "thm-ftc-second-part", "thm-sine-and-cosine-derivatives", "thm-chain-rule", "cor-mean-value-theorem", "thm-linearity-of-the-lebesgue-integral-on-l-one", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $k$ be a nonnegative integer, and suppose $\mathbb E|X|^k<\infty$, with $|X|^0=1$. Then $\varphi_X\in C^k(\mathbb R)$ and $$\varphi_X^{(j)}(t)=\mathbb E[(iX)^j e^{itX}],\qquad 0\le j\le k.$$ No converse is asserted.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The initial function is the expectation of the exponential. [[def-characteristic-function-of-a-real-random-variable]].

[F2] A specified dominated sequence has convergent integrals. [[thm-dominated-convergence]].

[F3] Frequency increments factor by exponential addition. [[thm-complex-exponential-addition-and-real-extension]].

[F4] Sine and cosine are differentiable with the usual derivatives. [[thm-sine-and-cosine-derivatives]].

[F5] Real-parameter differentiation of sine and cosine obeys the chain rule. [[thm-chain-rule]].

[F6] MVT bounds increments using bounded real derivatives. [[cor-mean-value-theorem]].

[F7] Difference quotients commute with integrable linear combinations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F8] Euler form and unit modulus control every frequency. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

## Proof

**Proof technique:** direct.

1.1 For $0\le j\le k$, $|x|^j\le1+|x|^k$, so $G_j(t)=\mathbb E[(iX)^j e^{itX}]$ exists. Applying MVT to sine and cosine gives $|e^{iv}-e^{iu}|\le\min(2,2|v-u|)$. For $|h|\le1/n$ it follows that $$|G_j(t+h)-G_j(t)|\le\mathbb E\bigl[|X|^j\min(2,2|X|/n)\bigr].$$ This prescribed nonnegative sequence tends pointwise to zero and is dominated by $2|X|^j$. DCT makes the bound tend to zero, proving continuity of every $G_j$ without selecting an arbitrary sequence of frequencies. [F1, F2, F3, F4, F6, F8]

2.1 For real x and nonzero h put $Q_h(x)=(e^{ihx}-1)/h-ix$. MVT applied to $\cos(hx)-1$ and $\sin(hx)$ yields numbers between zero and hx with $$\left|\frac{\cos(hx)-1}{h}\right|\le |x|\min(1,|hx|),\qquad \left|\frac{\sin(hx)}h-x\right|\le |x|\min(2,|hx|).$$ Here the first bound uses $|\sin v|\le\min(1,|v|)$ and the second $|\cos v-1|\le\min(2,|v|)$, each obtained from the same derivative bounds. Therefore $|Q_h(x)|\le\min(4|x|,2|h||x|^2)$, including x=0. For $1\le j\le k$, linearity and exponential addition give $$\left|\frac{G_{j-1}(t+h)-G_{j-1}(t)}h-G_j(t)\right|\le\mathbb E\bigl[|X|^{j-1}\min(4|X|,2|X|^2/n)\bigr]$$ whenever $0<|h|\le1/n$, interpreting the integrand as zero at X=0. The right side tends to zero by DCT, dominated by $4|X|^j$. Hence $G_{j-1}\prime=G_j$. [F2, F3, F4, F5, F6, F7, F8, step 1.1]

3.1 Starting from $G_0=\varphi_X$, the derivative identities in step 2.1 and continuity in step 1.1 establish the assertion through order k. If k=0 only the continuity conclusion of step 1.1 is required. At t=0 the formula becomes $\varphi_X^{(j)}(0)=i^j\mathbb E[X^j]$. All limits used prescribed majorants indexed by positive integers; this proof introduces no selection axiom. [F1, step 1.1, step 2.1] ∎
