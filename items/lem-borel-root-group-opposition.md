---
id: lem-borel-root-group-opposition
kind: lemma
title: Borel subgroups and the opposition of root groups
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 25
deps: [thm-root-subgroups-of-a-split-reductive-group, thm-split-rank-one-reductive-classification, thm-cocharacter-limit-subgroups, def-borel-subgroup-and-maximal-torus, thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field, thm-quotient-by-a-borel-subgroup-is-complete, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.72); Ch. 21 (21.28)-(21.32), printed pp. 433-434; Ch. 20 (20.20)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S6.2, Proposition 171(i)"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(G,T)$ be a split reductive group over $k$ and let $\alpha\in\Phi(G,T)$. Every Borel subgroup $B$ of $G$ containing $T$ contains exactly one of the two root groups $U_\alpha$, $U_{-\alpha}$, and $B\cap G_\alpha$ is a Borel subgroup of $G_\alpha$; exactly two Borel subgroups of $G_\alpha$ contain $T$, namely $U_\alpha T$ and $U_{-\alpha}T$. Moreover, for a cocharacter $\lambda$ of $T$ that is regular ($\langle\alpha,\lambda\rangle\neq0$ for all roots $\alpha$), $P_G(\lambda)$ is the unique Borel subgroup of $G$ containing $T$ with $\operatorname{Lie}P_G(\lambda)=\mathfrak t\oplus\bigoplus_{\langle\alpha,\lambda\rangle>0}\mathfrak g_\alpha$, and $\lambda\mapsto P_G(\lambda)$ induces a bijection from the set of Weyl chambers onto the set of Borel subgroups containing $T$.

## Facts & Assumptions

**Given:** AC, a split reductive group $(G,T)$ over $k$ and a root $\alpha\in\Phi(G,T)$.

[F1] $G_\alpha$ is split reductive of semisimple rank $1$ with roots $\pm\alpha$ and root groups $U_{\pm\alpha}\cong\mathbf G_a$, and $U_\alpha T$, $U_{-\alpha}T$ are its two Borel subgroups containing $T$; a Borel $B\supseteq T$ contains $U_\alpha$ iff its Lie algebra contains $\mathfrak g_\alpha$ ([[thm-root-subgroups-of-a-split-reductive-group]], [[thm-split-rank-one-reductive-classification]]).

[F2] For a cocharacter $\lambda$, the groups $Z_G(\lambda)$, $P_G(\lambda)$ and $U_G(\lambda)$ are smooth; $Z_G(\lambda)$ is connected for reductive $G$, $U_G(\lambda)$ is connected unipotent, and $P_G(\lambda)=U_G(\lambda)\rtimes Z_G(\lambda)$ with $\operatorname{Lie}P_G(\lambda)=\bigoplus_{n\ge0}\mathfrak g_n$ ([[thm-cocharacter-limit-subgroups]]). If $\lambda$ is regular, the zero-weight part is $\mathfrak t$, so $Z_G(\lambda)=T$ (Milne, Proposition 21.29).

[F3] Over an algebraically closed field, for a torus $S\subseteq B$, the intersection $C_G(S)\cap B$ is a Borel subgroup of $C_G(S)$ (Milne, paragraph 17.72). Borel subgroups containing a fixed maximal torus are conjugate by its normalizer ([[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]]; Milne, Proposition 17.11). The torus $T$ and the root groups for the positive weights of a regular cocharacter generate $P_G(\lambda)$ (Milne, Proposition 21.29); this use does not require an all-characteristics closed-weight-set criterion.

## Proof

1.1 Work first over an algebraic closure. Put $S=T_\alpha$ and $G_\alpha=C_G(S)$. Since $S\subseteq T\subseteq B$, the centralizer-intersection theorem [F3] says that $B\cap G_\alpha$ is a Borel subgroup of $G_\alpha$ containing $T$. The rank-one classification [F1] says that it is therefore exactly $U_\alpha T$ or $U_{-\alpha}T$, which proves that $B$ contains exactly one of the two root groups. The two rank-one Borels and the intersection are defined over $k$, so these equalities descend to $k$; the same argument applies to geometric Borels containing the split torus. [F1, F3, given, algebra]

2.1 Let $\lambda$ be regular. By [F2], $Z_G(\lambda)$ contains $T$, is smooth connected and has Lie algebra $\mathfrak t$, hence equals $T$ by dimension. Thus $P=P_G(\lambda)=U_G(\lambda)\rtimes T$ is smooth connected solvable. Over an algebraic closure it lies in a Borel $B$ containing $T$. Its Lie algebra is $\mathfrak t\oplus\bigoplus_{\langle\alpha,\lambda\rangle>0}\mathfrak g_\alpha$. By step 1.1 and the root-group containment criterion [F1], the Lie algebra of $B$ contains exactly one of each opposite pair of root spaces. It already contains the indicated positive ones, so $\operatorname{Lie}B=\operatorname{Lie}P$. The inclusion $P\subseteq B$ of smooth connected groups of equal dimension implies $P=B$. If $B'$ contains $T$ with this same Lie algebra, the containment criterion puts every positive root group in $B'$; by [F3] these root groups and $T$ generate $P$, so $P\subseteq B'$ and equality follows again by dimension. These equalities descend to $k$, proving the claimed Borel and uniqueness assertions. [F1, F2, F3, step 1.1, algebra]

3.1 The Lie algebra in step 2.1 determines precisely the signs of $\langle\alpha,\lambda\rangle$, so two regular cocharacters give the same Borel exactly when they lie in the same Weyl chamber. Each chamber contains an integral cocharacter because its defining strict inequalities have integral coefficients. For surjectivity, fix such a $\lambda$ and let $B$ be any geometric Borel containing $T$. Normalizer conjugacy [F3] gives $B=nP_G(\lambda)n^{-1}$ for some $n\in N_G(T)$ over the algebraic closure. Conjugation of the limit definition gives $nP_G(\lambda)n^{-1}=P_G(n\lambda n^{-1})$. The cocharacter $n\lambda n^{-1}$ belongs to the lattice of the split torus $T$, so is defined over $k$. Consequently every such Borel equals $P_G(\mu)$ for a $k$-cocharacter $\mu$, and descent proves the asserted bijection over $k$. [F2, F3, step 2.1, algebra] ∎ 