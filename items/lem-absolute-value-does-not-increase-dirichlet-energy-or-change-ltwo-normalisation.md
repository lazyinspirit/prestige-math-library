---
id: "lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation"
kind: "lemma"
title: "The absolute value preserves the L^2 norm and the Dirichlet energy on H^1_0"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences"
  - "cor-positive-negative-part-and-truncation-calculus-in-w-one-p"
  - "def-axiom-of-choice"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "thm-chain-rule"
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "thm-dominated-convergence"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Chapter 9 Section 9.1, Proposition 9.5 and its proof, printed p. 270 (smooth bounded-derivative compositions). The absolute-value and zero-boundary conclusions are derived here from the cited library truncation and closure interfaces."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u\in H^1_0(\Omega;\mathbb R)$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]). Then $|u|\in H^1_0(\Omega)$, $\bigl\||u|\bigr\|_{L^2(\Omega)}=\|u\|_{L^2(\Omega)}$ ([[def-l-p-space-as-a-quotient-by-null-functions]]), and
$$\int_\Omega\bigl|D|u|\bigr|^2\,dx=\int_\Omega|Du|^2\,dx .$$
Consequently the constrained minimisation of the Dirichlet energy on the $L^2$-unit sphere may be restricted to nonnegative competitors.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$, $n\ge1$, and a real class $u\in H^1_0(\Omega)$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice, inherited through the Sobolev composition and subsequence suppliers.

[A2] [[thm-choice-implies-dependent-implies-countable-choice]]: the Axiom of Choice implies Countable Choice, so [F4] applies under the Statement's assumption.

[F1] [[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]: for a real Sobolev class $v$, $|v|\in H^1(\Omega)$ and $D|v|=\operatorname{sgn}(v)Dv$ a.e., with $Dv=0$ a.e. on $\{v=0\}$; also $|v|=v^++v^- $.

[F2] [[def-sobolev-space-wkp-and-its-norm]]: $H^1(\Omega)$ is the space of $L^2$ classes with all first weak derivatives in $L^2$, with norm controlling both $\|v\|_{L^2}$ and $\|Dv\|_{L^2}$.

[F3] [[def-wkp-zero-as-a-sobolev-closure]]: $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in $H^1(\Omega)$ and is closed in that norm.

[F4] [[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]: if a sequence converges in $L^2(\Omega)$, it has a subsequence converging almost everywhere.

[F5] [[thm-chain-rule]]: for smooth $v$ and a smooth scalar function $\Phi$, $D(\Phi\circ v)=\Phi'(v)Dv$.

[F6] [[thm-dominated-convergence]]: an almost-everywhere convergent sequence dominated by an integrable function has convergent integrals.

[F7] [[def-l-p-space-as-a-quotient-by-null-functions]]: $L^2$ norms and pointwise compositions are well defined on almost-everywhere classes.



## Proof

**Proof technique:** direct.

**Given:** The open set $\Omega$ and real class $u\in H^1_0(\Omega)$ above.

1.1 (Smooth compactly supported case). Fix $v\in C_c^\infty(\Omega;\mathbb R)$ and, for $\varepsilon>0$, set $\Phi_\varepsilon(s)=\sqrt{s^2+\varepsilon^2}-\varepsilon$. Then $\Phi_\varepsilon$ is smooth, $\Phi_\varepsilon(0)=0$, $0\le\Phi_\varepsilon(s)\le|s|$, and $|\Phi_\varepsilon'(s)|\le1$. Thus $\Phi_\varepsilon\circ v\in C_c^\infty(\Omega)$. As $\varepsilon\downarrow0$, the squared value error is bounded by $|v|^2\in L^1$ and tends pointwise to zero, so $\Phi_\varepsilon(v)\to|v|$ in $L^2$ by [F6]. By [F5], $D(\Phi_\varepsilon(v))=\Phi_\varepsilon'(v)Dv$; the squared gradient error tends pointwise to zero and is bounded by $4|Dv|^2\in L^1$, so [F1] and [F6] give convergence to $D|v|$ in $L^2$. Hence $\Phi_\varepsilon(v)\to|v|$ in $H^1$, so $|v|\in H^1_0(\Omega)$ by [F3]. [F1, F3, F5, F6]

2.1 (Approximation and almost-everywhere convergence). By [F3] choose $v_j\in C_c^\infty(\Omega)$ with $v_j\to u$ in $H^1$. In particular $v_j\to u$ in $L^2$; by [A2], Countable Choice is available, so [F4] lets us pass to a subsequence, still denoted $v_j$, with $v_j\to u$ almost everywhere. Step 1.1 gives $|v_j|\in H^1_0(\Omega)$ for every $j$. The pointwise inequality $||v_j|-|u||\le|v_j-u|$ shows $|v_j|\to|u|$ in $L^2$. [A2, F2, F3, F4]

3.1 (Convergence of the gradients). By [F1],   $$D|v_j|-D|u|=\operatorname{sgn}(v_j)(Dv_j-Du)+(\operatorname{sgn}(v_j)-\operatorname{sgn}(u))Du.$$ The first term tends to zero in $L^2$ because $|\operatorname{sgn}(v_j)|\le1$ and $Dv_j\to Du$ in $L^2$. For the second, at almost every point where $u\ne0$ the signs converge by the pointwise convergence in step 2.1; on $\{u=0\}$ one has $Du=0$ a.e. by [F1]. Thus its squared magnitude tends to zero a.e. and is bounded by $4|Du|^2\in L^1$, so [F6] gives convergence to zero in $L^2$. Therefore $D|v_j|\to D|u|$ in $L^2$. [step 2.1, F1, F6]

4.1 Since $|v_j|\to|u|$ in $H^1$ by steps 2.1-3.1 and $H^1_0(\Omega)$ is closed by [F3], $|u|\in H^1_0(\Omega)$. Pointwise $||u||=|u|$, so the $L^2$ norms agree by [F7]; and [F1], including $Du=0$ a.e. on $\{u=0\}$, gives $|D|u||=|Du|$ a.e., hence equality of the Dirichlet energies. Consequently every unit-sphere competitor $u$ is replaced by the nonnegative competitor $|u|$ with the same energy, so the infimum is unchanged when minimisation is restricted to nonnegative competitors. The Axiom of Choice enters only through the declared composition and subsequence suppliers. [step 2.1, step 3.1, F1, F3, F7, A1, A2] ∎
