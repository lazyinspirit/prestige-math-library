---
id: lem-transverse-shapovalov-pairing-on-a-generic-hyperplane
kind: lemma
title: "The first transverse Shapovalov pairing is perfect"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-generic-shapovalov-radical-on-a-casimir-hyperplane, thm-existence-and-uniqueness-of-the-shapovalov-form, prop-casimir-eigenvalue-on-a-highest-weight-module, def-shapovalov-determinant-on-a-weight-space, thm-pbw-model-of-a-verma-module]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(vi), (viii)–(ix), pp. 46–47"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical author review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

In the setting of [[lem-generic-shapovalov-radical-on-a-casimir-hyperplane]],
let $\lambda\in H_{\alpha,n}$ be generic, put $\mu=\lambda-n\alpha$,
and choose $\delta\in\mathfrak h^*$ with
$\langle\delta,\alpha^\vee\rangle=1$. Identify the PBW weight spaces of
$M(\lambda+t\delta)$ over $\mathbb C\llbracket t\rrbracket$.
On each weight space, the first $t$-derivative of its Shapovalov form
restricts to a perfect bilinear pairing on the radical at $t=0$.
Consequently the order of $D_\beta(\lambda+t\delta)$ at $t=0$ is
$K(\beta-n\alpha)$ for every $\beta\in Q^+$.

## Facts & Assumptions

**Given:** The generic radical $R=M(\mu)\subset M(\lambda)$ from [[lem-generic-shapovalov-radical-on-a-casimir-hyperplane]], the Shapovalov form [[thm-existence-and-uniqueness-of-the-shapovalov-form]], and a transverse $\delta$ as in the Statement.

[F1] The form is uniquely normalized and contravariant ([[thm-existence-and-uniqueness-of-the-shapovalov-form]]). Its transpose is another normalized contravariant form because the Chevalley anti-involution squares to the identity, so uniqueness also makes it symmetric.

[F2] The quadratic Casimir acts on a cyclic highest-weight module of highest weight $\eta$ by $(\eta,\eta+2\rho)$ ([[prop-casimir-eigenvalue-on-a-highest-weight-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $B_t$ be the restricted form in PBW coordinates, and let $R_\beta=\ker B_0$ in weight $\lambda-\beta$. For $x,y\in R_\beta$, the value $B'_0(x,y)$ is independent of their chosen lifts to first order, because $B_0$ vanishes whenever one argument is in $R_\beta$. Differentiating contravariance shows that these first derivatives assemble into a contravariant bilinear form on $R$: the extra terms from differentiating the module action are paired by $B_0$ with a radical vector and vanish. The form is symmetric. [given, F1, algebra]

2.1 Since $R\cong M(\mu)$, any contravariant form on it is determined by its value on the one-dimensional highest-weight line: move every negative-root operator across the form and use the highest-vector annihilation relations. Thus $B'_0|_R$ is a scalar multiple of the Shapovalov form of $M(\mu)$. That form is nondegenerate because $M(\mu)$ is simple by the generic-radical lemma. It remains to prove the derivative's value on a nonzero highest vector $u_0\in R_{n\alpha}$ is nonzero. [step 1.1, given, algebra]

3.1 Assume $B'_0(u_0,u_0)=0$. The matrix $B_0$ in weight $\mu$ is symmetric with kernel $\mathbb C u_0$, by the generic-radical lemma. The linear functional $-B'_0(u_0,-)$ annihilates that kernel, so it lies in the image of $B_0$. Choose a weight-$\mu$ vector $u_1$ with $B_0(u_1,-)=-B'_0(u_0,-)$ and set $u(t)=u_0+t u_1$. Then $B_t(u(t),w)=0\pmod{t^2}$ for every vector $w$ in that PBW weight space. [step 2.1, assume-contra, algebra]

4.1 For each simple positive-root vector $e_i$ and any vector $w$ of the adjacent weight, contravariance gives $B_t(e_i u(t),w)=B_t(u(t),f_iw)=0\pmod{t^2}$. The specialized form is invertible at weight $\mu+\alpha_i$, since $R\cong M(\mu)$ has no weight above $\mu$. Therefore $e_i u(t)=0\pmod{t^2}$ for every $i$, and the same holds for all positive-root vectors because the $e_i$ generate $\mathfrak n^+$. [F1, step 3.1, given, algebra]

5.1 In the deformed module the Cartan weight of $u(t)$ is $\mu+t\delta$. Step 4.1 and the usual Casimir calculation on a highest vector give $C u(t)=(\mu+t\delta,\mu+t\delta+2\rho)u(t)\pmod{t^2}$. But the same central element acts throughout $M(\lambda+t\delta)$ by $(\lambda+t\delta,\lambda+t\delta+2\rho)$. Their constant terms agree because $\lambda\in H_{\alpha,n}$; their linear coefficients differ by $2(\lambda-\mu,\delta)=n(\alpha,\alpha)\ne0$. Since $u_0\ne0$, these two congruences contradict each other. Thus $B'_0(u_0,u_0)\ne0$, and step 2.1 proves perfectness on every radical weight space. [F2, step 4.1, discharge-contradiction]

6.1 Choose bases adapted to the radical and a complementary subspace. The specialized matrix has a zero radical block and an invertible complementary block. The radical block of $B_t$ is $t B'_0|_{R_\beta}+O(t^2)$, while its mixed blocks are $O(t)$. Since $B'_0|_{R_\beta}$ and the complementary block are invertible, a block determinant expansion gives $\operatorname{ord}_{t=0}\det B_t=\dim R_\beta$. The generic-radical lemma identifies this dimension as $K(\beta-n\alpha)$, proving the asserted order. [step 5.1, given, algebra] ∎
