---
id: lem-nonzero-highest-weight-images-survive-modulo-n-minus
kind: lemma
title: Nonzero highest-weight images survive modulo n-minus (BGG 10.6b)
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-jordan-holder-factors-of-verma-modules-lie-above-the-head, def-composition-series-and-composition-factors-of-an-object, thm-verma-module-has-a-unique-simple-quotient, lem-a-proper-verma-submodule-misses-the-highest-weight-line, prop-equivalent-support-description-of-category-o, prop-verma-composition-multiplicities-are-finite, def-axiom-of-choice, thm-every-category-o-object-has-finite-length, lem-positive-root-pairings-of-a-dominant-integral-weight, thm-simple-objects-of-category-o-are-highest-weight-modules, def-bgg-category-o]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.2 (BGG Lemma 10.6b), pp. 25-26"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria, Trans. AMS 262 (1980), Sec. 8, Lemma 8.1, pp. 348-349"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$, let $w_0\in W$, and let $M\in\mathcal O$ be an object all of whose composition factors are of the form $L(u\circ\lambda)$ with $\ell(u)\ge\ell(w_0)$. If $\varphi\colon M(w_0\circ\lambda)\to M$ is a $\mathfrak g$-homomorphism with $\varphi(v)\ne0$, where $v$ is a highest weight vector of $M(w_0\circ\lambda)$, then $\varphi(v)\notin\mathfrak n^-M$; equivalently the class of $\varphi(v)$ in $M/\mathfrak n^-M$ is nonzero.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\lambda\in\Lambda^+$, an element $w_0\in W$ (fixed throughout and not necessarily the longest element), a nonzero $M\in\mathcal O$ whose composition factors are $L(u\circ\lambda)$ with $\ell(u)\ge\ell(w_0)$, and a homomorphism $\varphi\colon M(w_0\circ\lambda)\to M$ with $\varphi(v)\ne0$ for a highest weight vector $v$ of $M(w_0\circ\lambda)$.

[F1] $\mathcal O$ has finite length, composition factors are additive in exact sequences, and the simple objects are the $L(\mu)$ with $L(\mu)\cong L(\mu')$ only for $\mu=\mu'$ ([[thm-every-category-o-object-has-finite-length]], [[def-composition-series-and-composition-factors-of-an-object]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]]).

[F2] The weight set of an object of $\mathcal O$ lies in a finite union of cones; every nonzero object has a weight vector killed by $\mathfrak n^+$ (a highest weight vector for a maximal weight), which generates a highest weight module with head $L(\mu)$ ([[prop-equivalent-support-description-of-category-o]], [[thm-verma-module-has-a-unique-simple-quotient]], [[lem-a-proper-verma-submodule-misses-the-highest-weight-line]]).

[F3] If $L(\mu)$ occurs in a composition series of $M(w'\circ\lambda)$ then $\mu=u\circ\lambda$ for some $u\ge w'$ in Bruhat order, so $\ell(u)\ge\ell(w')$; in particular the factors of $M(\mu)$ are dominated by $\mu$, and distinct dot translates of $\lambda$ have distinct weights ([[lem-jordan-holder-factors-of-verma-modules-lie-above-the-head]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

[F4] For $M\in\mathcal O$ the coinvariants are computed weight by weight as $(\mathfrak n^-M)_\mu=\sum_{\alpha\in\Phi^+}f_\alpha M_{\mu+\alpha}$ ([[prop-equivalent-support-description-of-category-o]], [[def-bgg-category-o]]).

## Proof

1.1 Choose a weight $\mu$ of $M$ which is maximal in the weight poset, and a nonzero $u\in M_\mu$. Then $\mathfrak n^+u=0$: otherwise some $u_\alpha:=e_\alpha u\ne0$ of weight $\mu+\alpha$ would be a weight of $M$ above $\mu$, contradicting maximality. Hence $N:=U(\mathfrak g)u\subseteq M$ is a highest weight module with head $L(\mu)$ by [F2], so $L(\mu)\in\operatorname{JH}(N)\subseteq\operatorname{JH}(M)$ and in particular the hypothesis of the statement forces $\mu=v\circ\lambda$ with $\ell(v)\ge\ell(w_0)$. [F2, F1, algebra]

2.1 **Case 1: $\varphi(v)\in N$.** Then $U(\mathfrak g)\varphi(v)\subseteq N$ is a highest weight module with highest weight $w_0\circ\lambda$, so its head is $L(w_0\circ\lambda)$ and $L(w_0\circ\lambda)\in\operatorname{JH}(N)\subseteq\operatorname{JH}(M(\mu))$ because $N$ is a quotient of $M(\mu)$. By [F3] the factors of $M(v\circ\lambda)=M(\mu)$ are $L(u'\circ\lambda)$ with $u'\ge v$. Hence $w_0\ge v$ in Bruhat order. Since this gives $\ell(v)\le\ell(w_0)$ and $\ell(v)\ge\ell(w_0)$, we get $\ell(v)=\ell(w_0)$ and therefore $v=w_0$; so $\mu=w_0\circ\lambda$. [F1, F2, F3, step 1.1, base]

2.2 **Case 2: $\varphi(v)\notin N$.** Let $\pi\colon M\to M/N$. Then $\pi\varphi(v)\ne0$, and $M/N$ again has all composition factors of the form $L(u\circ\lambda)$ with $\ell(u)\ge\ell(w_0)$, because $\operatorname{JH}(M/N)\subseteq\operatorname{JH}(M)$ by additivity [F1]; moreover $\operatorname{JH}(M)=\operatorname{JH}(N)\sqcup\operatorname{JH}(M/N)$ with $\operatorname{JH}(N)\ne\emptyset$ since $N\ne0$ has finite length, so $M/N$ has strictly fewer composition factors. By induction on the number of composition factors (the base case being Case 1, which needs no induction hypothesis) we may assume $\pi\varphi(v)\notin\mathfrak n^-(M/N)$. Since $\pi(\mathfrak n^-M)=\mathfrak n^-(M/N)$, this implies $\varphi(v)\notin\mathfrak n^-M$. [F1, step 1.1, ih]

3.1 In Case 1, $\varphi(v)$ lies in the $\mu$-weight space $M_\mu$ with $\mu=w_0\circ\lambda$ maximal among the weights of $M$; hence $M_{\mu+\alpha}=0$ for every $\alpha\in\Phi^+$, and by [F4] the weight-$\mu$ part of $\mathfrak n^-M$ is $\sum_\alpha f_\alpha M_{\mu+\alpha}=0$. As $\varphi(v)$ has weight $\mu$ by $\mathfrak h$-equivariance, $\varphi(v)\notin\mathfrak n^-M$. [F4, step 2.1]

4.1 Every $M$ of finite length falls into Case 1 or Case 2, and in Case 2 the reduction terminates; hence in all cases $\varphi(v)\notin\mathfrak n^-M$, as claimed. [F1, step 3.1, step 2.2, discharge-induction: induction on the number of composition factors] ∎
