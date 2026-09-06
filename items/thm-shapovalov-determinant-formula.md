---
id: thm-shapovalov-determinant-formula
kind: theorem
title: "The Shapovalov determinant formula"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-shapovalov-determinant-on-a-weight-space, def-weyl-vector-rho-for-a-chosen-positive-system, def-root-reflections-and-the-weyl-group-action, prop-casimir-eigenvalue-on-a-highest-weight-module, prop-the-shapovalov-radical-is-the-maximal-submodule, lem-every-nonzero-verma-submodule-contains-a-singular-vector, thm-universal-property-of-verma-modules, thm-pbw-model-of-a-verma-module]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(iv)-(x)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For $\lambda\in\mathfrak h^*$ and $\beta\in Q^+$, let $K(\gamma)$ be the
number of partitions of $\gamma\in Q^+$ into positive roots, and set
$K(\gamma)=0$ when $\gamma\notin Q^+$. Then

$$D_\beta(\lambda)\doteq\prod_{\alpha\in\Phi^+}\prod_{n\ge1}(\langle\lambda+\rho,\alpha^\vee\rangle-n)^{K(\beta-n\alpha)}.$$

For fixed $\beta$ only finitely many exponents are nonzero.

## Facts & Assumptions

**Given:** The determinant definition [[def-shapovalov-determinant-on-a-weight-space]], the Weyl vector [[def-weyl-vector-rho-for-a-chosen-positive-system]], root coroots [[def-root-reflections-and-the-weyl-group-action]], and the Casimir eigenvalue [[prop-casimir-eigenvalue-on-a-highest-weight-module]].

[L1] Etingof, Exercise 8.15(vii)--(ix), supplies the following intermediate generic-hyperplane result used below: for generic $\lambda$ on $H_{\alpha,n}$ there is an injective highest-weight map $M(\lambda-n\alpha)\hookrightarrow M(\lambda)$, its image is the full Shapovalov radical, and the first transverse derivative of the form is nondegenerate on that radical.

## Proof

**Proof technique:** direct.

1.1 In PBW bases, commute each positive-root factor past negative-root factors before evaluating on $v_\lambda$. The diagonal terms are the only terms of maximal total degree. Counting, for each occurrence of a root $\alpha$, the PBW monomials in which that occurrence can be removed gives the following leading term. [given, algebra]

$$D_\beta^{\mathrm{top}}(\lambda) =c\prod_{\alpha\in\Phi^+} \langle\lambda,\alpha^\vee\rangle^{\sum_{n\ge1}K(\beta-n\alpha)} \qquad(c\ne0).$$

2.1 In particular, $D_\beta$ is nonzero and has the total degree displayed on the right. [step 1.1, algebra]

3.1 Suppose $D_\beta(\lambda)=0$. The radical is then nonzero in weight $\lambda-\beta$. By [[prop-the-shapovalov-radical-is-the-maximal-submodule]] and [[lem-every-nonzero-verma-submodule-contains-a-singular-vector]], it contains a singular vector of some weight $\lambda-\gamma$, with $\gamma\in Q^+\setminus\{0\}$. The universal property gives a nonzero map $M(\lambda-\gamma)\to M(\lambda)$. The Casimir has the same scalar on its source and image, giving the following identity. [step 2.1, algebra]

$$2(\lambda+\rho,\gamma)=(\gamma,\gamma).$$

4.1 Consequently every irreducible factor of $D_\beta$ is an affine linear form with normal direction $\gamma$. Comparing its leading direction with the product in step 1.1 shows that $\gamma=n\alpha$ for a positive root $\alpha$ and an integer $n\ge1$.  Substitution in step 3.1 then gives $\langle\lambda+\rho,\alpha^\vee\rangle=n$. Thus, for some integers $m_{n\alpha}(\beta)\ge0$, the following factorization holds. [step 1.1, step 3.1, algebra]

$$D_\beta(\lambda)\doteq \prod_{\alpha\in\Phi^+}\prod_{n\ge1} (\langle\lambda+\rho,\alpha^\vee\rangle-n)^{m_{n\alpha}(\beta)}.$$

5.1 This is the claimed preliminary factorization. [step 4.1]

6.1 Fix $\alpha,n$ and choose $\lambda$ generically on the hyperplane $H_{\alpha,n}$.  The generic-hyperplane result [L1] gives an injective map $M(\lambda-n\alpha)\to M(\lambda)$ whose image is exactly the Shapovalov radical. Under PBW, its part in weight $\lambda-\beta$ has dimension $K(\beta-n\alpha)$, including dimension $0$ when $\beta-n\alpha\notin Q^+$. [L1, step 5.1]

7.1 Choose $\delta\in\mathfrak h^*$ with $\langle\delta,\alpha^\vee\rangle=1$ and restrict the form in weight $\lambda-\beta$ along $\lambda+t\delta$. Its kernel at $t=0$ is the space in step 6.1.  By [L1], the first derivative of the form is nondegenerate on that kernel. Equivalently, a vector pairing to order $t^2$ would force the two relevant Casimir scalars to agree modulo $t^2$, although their difference is the following nonzero linear term. [L1, step 6.1, algebra]

$$n(\alpha,\alpha) (\langle\lambda+t\delta+\rho,\alpha^\vee\rangle-n) =n(\alpha,\alpha)t,$$

8.1 This difference is nonzero modulo $t^2$, a contradiction. The elementary determinant lemma obtained by choosing bases adapted to the kernel now says that the transverse order of $D_\beta$ along $H_{\alpha,n}$ is the kernel dimension. Therefore $m_{n\alpha}(\beta)=K(\beta-n\alpha)$. [step 7.1, algebra]

9.1 Substitution in step 5.1 proves the formula up to the nonzero basis scalar. Finally $\beta-n\alpha\in Q^+$ bounds $n$ by the height of $\beta$, so only finitely many displayed exponents are nonzero. [step 5.1, step 8.1, algebra] ∎
