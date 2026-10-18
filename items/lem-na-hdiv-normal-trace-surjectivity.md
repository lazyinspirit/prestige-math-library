---
id: "lem-na-hdiv-normal-trace-surjectivity"
kind: "lemma"
title: "Weak H(div) normal trace surjects onto the scalar trace dual"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 5
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "def-na-hdiv-space",
    "def-sobolev-space-wkp-and-its-norm",
    "def-wkp-zero-as-a-sobolev-closure",
    "lem-na-hdiv-weak-normal-trace",
    "lem-l-two-with-the-integral-pairing-is-a-hilbert-space",
    "thm-riesz-representation-for-hilbert-space",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "ai-altered", "proof": "ai-altered" }
sources:
  {
    "references":
      [
        {
            "title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG
              method",
            "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf",
            "locator": "Complete 15-page paper, §3.2 and §3.3: global scalar and normal
              skeleton trace spaces and their extension quotient norms. Those
              definitions give the interface; the local Riesz construction in
              this item supplies the surjectivity proof."
          },
        {
            "title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method
              for the Poisson equation",
            "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf",
            "locator": "Complete 22-page paper, §§3.1–3.2: ultraweak trial skeleton trace
              quotient spaces and their lift norms. The paper supplies context
              for the trace interface; the local proof here establishes
              onto-ness independently."
          }
      ]
  }
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the local trace quotient convention of [[lem-na-hdiv-weak-normal-trace]]. Let $D\subset\mathbb R^d$ be open; all spaces are real. With $T_D=H^1(D)/H^1_0(D)$ and its quotient norm, the weak normal trace map
$$\gamma_n:H(\operatorname{div};D)\longrightarrow T_D',\qquad \langle\gamma_n\tau,[w]\rangle=\int_D\bigl(\tau\cdot\nabla w+(\operatorname{div}\tau)w\bigr),$$
is onto. In fact every $L\in T_D'$ has a lift $\tau\in H(\operatorname{div};D)$ satisfying $\gamma_n\tau=L$ and $\|\tau\|_{H(\operatorname{div})}\le\|L\|_{T_D'}$.

## Facts & Assumptions

**Given:** Countable Choice, an open set $D$, and a bounded real linear functional $L$ on $T_D$.

[A1] Countable Choice is used by the Sobolev and Hilbert Riesz interfaces. ([[def-countable-choice]])

[F1] $H^1(D)$ consists of real $L^2$ functions with all first distributional derivatives in $L^2$, and $H^1_0(D)$ is the $H^1$ closure of $C_c^\infty(D)$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

[F2] Real $L^2$ is complete for its integral inner product. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F3] Riesz represents each bounded real functional on a Hilbert space by a vector of the same norm. ([[thm-riesz-representation-for-hilbert-space]])

[F4] For $\tau\in H(\operatorname{div};D)$ the weak normal trace is the displayed Green functional on $T_D$. ([[lem-na-hdiv-weak-normal-trace]])

[F5] $H(\operatorname{div};D)$ requires an $L^2$ vector field and an $L^2$ distributional divergence. ([[def-na-hdiv-space]])

## Proof

1.1 The space $H^1(D)$ is Hilbert for $(z,w)_{H^1}=(z,w)_{L^2}+(\nabla z,\nabla w)_{L^2}$. Indeed, a Cauchy sequence of functions and their weak derivatives converges componentwise in $L^2$ by [F2]; testing against $C_c^\infty(D)$ and passing both integrals to the limits shows the derivative limits are the weak derivatives of the function limit. The quotient map $q:H^1(D)\to T_D$ has norm at most one, so $\Lambda(w):=L(qw)$ is bounded on $H^1(D)$ with $\|\Lambda\|\le\|L\|$. By [F3] choose its Riesz representative $z\in H^1(D)$, so $\Lambda(w)=(\nabla z,\nabla w)+(z,w)$. [A1, F1, F2, F3, given]

2.1 For every $\phi\in C_c^\infty(D)$, $q\phi=0$ because $\phi\in H^1_0(D)$; hence $0=\Lambda(\phi)=(\nabla z,\nabla\phi)+(z,\phi)$. By the distributional definition of divergence, this means $\operatorname{div}(\nabla z)=z$. Since $z\in L^2(D)$ and $\nabla z\in L^2(D)^d$, [F5] gives $\tau:=\nabla z\in H(\operatorname{div};D)$, with $\|\tau\|_{H(\operatorname{div})}^2=\|\nabla z\|_2^2+\|z\|_2^2=\|z\|_{H^1}^2=\|\Lambda\|^2\le\|L\|^2$. [A1, F1, F2, F3, F5, step 1.1, algebra]

3.1 For any $[w]\in T_D$, [F4] and step 2.1 give $\langle\gamma_n\tau,[w]\rangle=(\nabla z,\nabla w)+(z,w)=\Lambda(w)=L([w])$. Thus $\gamma_n\tau=L$, and step 2.1 gives the claimed norm bound. Since $L$ was arbitrary, $\gamma_n$ is onto. [F3, F4, step 1.1, step 2.1, algebra] ∎
