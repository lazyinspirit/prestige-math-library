---
id: thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention
kind: theorem
title: "The restricted-partition component is the basic crystal in the symmetric-group convention"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators,
       def-symmetric-group-level-one-residue-and-partition-label-convention,
       thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero,
       prop-every-p-restricted-partition-is-reached-by-cogood-node-additions,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction,
       def-jucys-murphy-elements-of-the-symmetric-group-algebra,
       def-sign-representation-and-restriction-of-a-representation,
       def-module-radical-socle-head-and-loewy-series,
       def-axiom-of-choice]
justified_by: []
aliases: []
axiom_use: "Assume the axiom of choice ([[def-axiom-of-choice]]) exactly through [[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]], which splits the integrable Fock module with its crystal basis into highest-weight components and thereby supplies the transported full decomposition and the statement that the empty component is the canonical B(Lambda_0). The identification of the empty component with the e-restricted partitions themselves is choice-free, by [[prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators]] together with Kleshchev's direct construction of the crystal on the restricted vertex set (survey Theorem 8.2(ii) with Example 3.2(i), equivalently Fayers' Theorem 2.1 restricted model), and [[prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]] supplies the prime case choice-free. Consumers must carry the same assumption while the decomposition is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. AMS 47 (2010) 419-481, arXiv:0909.4844 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "sec. 2.1, printed p. 8 (quantum characteristic, e=0 boundary); sec. 3.4, printed pp. 18-19 and Example 3.2, printed p. 20 (RP^kappa = e-restricted partitions for e>0, l=1; the e=0 and k_1>=k_2 case (ii)); Theorem 5.4, printed p. 24 (the D(mu) with mu in RP^kappa are a complete irredundant set of irreducible H^Lambda_d-modules); Remark 5.5, printed p. 24 (D^mu = D(mu^t) tensor sgn for l=1, xi=1); Theorem 7.4(i), printed pp. 32-33 (socle and head of E_i D(mu) are D(e~_i mu)); Theorem 8.2, printed pp. 37-38 (the crystal (RP^kappa, e~, f~, eps, phi, wt) is the highest-weight crystal of V(Lambda)); sec. 11.4, printed pp. 53-54 (good = top normal removable node, cogood = bottom conormal addable node; Theorems 11.6, 11.7); Theorem 11.8, printed p. 54 (the same-model sign involution negates good-node residues)"
    - title: "Matthew Fayers, Partition models for the crystal of the basic U_q(sl_n)-module, arXiv:0906.4129 (complete 31-page paper)"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2.3, printed pp. 3-4: the n-restricted labels with the increasing-column model form B(Lambda_0) (Theorem 2.1, quoting Misra-Miwa Theorem 4.7); the n-regular model is obtained by reversing the column order, and the two models are related by the Mullineux map; an explicit isomorphism of B(Lambda_0) with the restricted model is thus a direct construction on that vertex set"
---
## Statement

Fix a finite integer $e \ge 2$. In the symmetric-group convention of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]]:

1. The empty component of the transported full Fock crystal $F_{\mathrm{sym}}$
   is **exactly the set of $e$-restricted partitions**, its operators are the
   modular good-node deletions and cogood-node additions, its weight function is
   $\operatorname{wt}(\lambda) = \Lambda_0 - \sum_i m_i(\lambda)\alpha_i$, the
   counts $\varepsilon_i$, $\varphi_i$ are the numbers of normal and of
   conormal $i$-nodes, and the component is $B(\Lambda_0)$: every $e$-restricted
   shape is reached from the empty partition by successive cogood additions.
2. The full $F_{\mathrm{sym}}$ has all partitions as vertices and is reducible;
   its transported field decomposition is
   $F_{\mathrm{sym}} \cong \bigoplus_{k \ge 0} V(\Lambda_0 - k\delta)^{\oplus p(k)}$
   with $p(k)$ the number of partitions of $k$, so its other vertices are
   exactly the non-restricted shapes.
3. In the symmetric-group regime (algebraically closed field $k$ of
   characteristic $p > 0$, Hecke parameter $\xi = 1$, so $e = p$ is prime) the
   $e$-restricted labels $\lambda$ are the simple $kS_d$-modules in the
   dual-Specht convention, and for every $i$ with $\varepsilon_i(\lambda) > 0$
   $$\operatorname{soc}\bigl(E_{-i}D^{\lambda'}\bigr) = D^{(\tilde e_i\lambda)'},$$
   where $D^{\lambda'}$ is the James-labelled simple, $E_{-i}$ the
   residue-summand functor after the sign twist, and $D^{(\tilde e_i\lambda)'}$
   the James label of the deleted shape. That is, the standard $E_{-i}$ is the
   residue functor twisted by the sign representation.
4. At quantum characteristic $e = 0$ (colors $\mathbb{Z}$) every level-one
   partition is a label of the empty $\mathfrak{sl}_\infty$ crystal, there are
   no same-content corner cancellations, and no finite affine datum, weight
   formula or Hecke module statement is made.

General finite-$e$ Hecke crystal labels remain valid, but they are not called
symmetric-group modules of "characteristic $e$". The axiom of choice is used
exactly as declared in the contract, through the highest-weight decomposition of
the full Fock module; the component identification of part 1 is choice-free.

## Facts & Assumptions

**Given:** A finite integer $e \ge 2$ and the conventions of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]]; for
parts 3 and 4 additionally an algebraically closed field $k$ of characteristic
$p>0$ with $\xi = 1$, so that $e = p$, or the boundary $e = 0$.

[F1] $F_{\mathrm{sym}}$ is the relabelled Fock space with $J M_\lambda = |\lambda'\rangle$,
transported operators $E_i^{\mathrm{sym}} = J^{-1}E_{-i}^{\mathrm{QG}}J$,
$F_i^{\mathrm{sym}} = J^{-1}F_{-i}^{\mathrm{QG}}J$, and weight
$\operatorname{wt}(M_\lambda) = \Lambda_0 - \sum_i m_i(\lambda)\alpha_i$; its
vertices are all partitions; $\lambda$ is $e$-restricted if and only if
$\lambda'$ is $e$-regular; the empty partition is fixed by the dictionary
([[def-symmetric-group-level-one-residue-and-partition-label-convention]]).

[F2] Conjugation intertwines the modular operators on $e$-restricted labels
with the normalized Fock operators on the empty component with negated colors,
$C\tilde e_i\lambda = \tilde e^{\mathrm{QG}}_{-i}C\lambda$ and
$C\tilde f_i\lambda = \tilde f^{\mathrm{QG}}_{-i}C\lambda$, including zero
values; $\varepsilon_i(\lambda) = \varepsilon_{-i}(\lambda')$,
$\varphi_i(\lambda) = \varphi_{-i}(\lambda')$, and
$\operatorname{wt}(\lambda') = \tau(\operatorname{wt}(\lambda))$
([[prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators]]).

[F3] Assume the axiom of choice as declared there
([[def-axiom-of-choice]]). The empty component of the full partition Fock
crystal is the canonical $B(\Lambda_0)$, with exactly the $e$-regular labels;
its module is $M = U_q|\mathrm{empty}\rangle$ and it occurs once; and
$F_{\mathrm{QG}} = \bigoplus_{k \ge 0} V(\Lambda_0 - k\delta)^{\oplus p(k)}$ is a
locally weight-finite indexed direct sum with $p(k)$ the number of partitions
of $k$, whence
$\operatorname{ch} F_{\mathrm{QG}} = \operatorname{ch} V(\Lambda_0)\prod_{r \ge 1}(1 - \exp(-r\delta))^{-1}$;
a highest crystal label need not be a highest field standard vector
([[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]]).

[F4] For a field $k$ of characteristic $p>0$, every $p$-restricted partition is
obtained from the empty partition by successive cogood additions, and every
nonempty $p$-restricted partition has a good node; the argument is choice-free
([[prop-every-p-restricted-partition-is-reached-by-cogood-node-additions]]).

[F5] For $k$ of characteristic $p>0$, $\mu$ $p$-restricted and
$\varepsilon_i(\mu)>0$, the residue-summand functor $E_i$ of
[[def-generalized-jm-primary-idempotents-and-residue-summand-functors]] satisfies
$\operatorname{soc} E_iD(\mu) \cong \operatorname{hd} E_iD(\mu) \cong D(\mu \setminus A)$
with $A$ the good $i$-node, and the total multiplicity of $D(\mu\setminus A)$
in $E_iD(\mu)$ is $\varepsilon_i(\mu)$
([[thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction]]).
Here $D(\mu)$ is the simple module of the $p$-restricted label $\mu$ in the
dual-Specht convention, and $E_i$ is the projection of the restriction onto the
summand whose Jucys-Murphy content ends in $i$; in particular
$\operatorname{Res} M = \bigoplus_i E_iM$.

[F6] For $p$-regular $\mu$ the James-labelled simple and the dual-Specht simple
are related by $D^\mu \cong D(\mu') \otimes \operatorname{sgn}$
([[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]);
the Jucys-Murphy elements are
$L_r = \sum_{s<r}(s\,r) \in kS_d$
([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]) and each
transposition acts on the sign representation
([[def-sign-representation-and-restriction-of-a-representation]]) by $-1$; the
socle of a finite-dimensional module is its largest semisimple submodule
([[def-module-radical-socle-head-and-loewy-series]]).

[F7] For the source boundary $e = 0$ the ground datum is the quantum
characteristic convention of Kleshchev's survey (printed p. 8), under which no
positive integer $e$ with $1 + \xi + \dots + \xi^{e-1} = 0$ exists and the
colors form $\mathbb{Z}$; for level $l = 1$ Example 3.2(ii) of the survey
(printed p. 20) has vacuous inequalities, so every partition is a label of the
crystal, and the restricted signature reduces with no cancellable pair because
distinct corners of one partition have distinct contents, as recorded in
[[def-symmetric-group-level-one-residue-and-partition-label-convention]].

## Proof

**Proof technique:** direct.

1.1 The conjugation dictionary identifies the vertex sets of the two components. By [F1] transposition is a bijection from the $e$-restricted onto the $e$-regular partitions, fixing the empty partition, and by [F3] the vertex set of the empty component of the full Fock crystal is exactly the set of $e$-regular partitions. Hence the $J^{-1}$-image of the empty component is exactly the $e$-restricted set, with the empty partition corresponding to the vacuum, and by [F2] the transported modular operators on these labels are the transported normalized Fock operators $\tilde e^{\mathrm{sym}}_i = J^{-1}\tilde e^{\mathrm{QG}}_{-i}J$, $\tilde f^{\mathrm{sym}}_i = J^{-1}\tilde f^{\mathrm{QG}}_{-i}J$. [given, F1, F2, F3]

2.1 The transported component is connected and generated from the vacuum. The empty component of [F3] is the canonical $B(\Lambda_0)$, hence connected and generated from its highest vertex by the $\tilde f^{\mathrm{QG}}$; transporting along the bijection of step 1.1, the $e$-restricted labels form one connected component of the transported crystal, generated from the empty partition by the operators $\tilde f^{\mathrm{sym}}_i$, that is, by modular cogood additions. In particular every $e$-restricted shape is reached from the empty partition by successive cogood additions, and dually by successive good deletions; for $e = p$ prime this is also the choice-free statement of [F4], whose good and cogood nodes are the modular ones by [F2]. [given, F2, F3, F4, step 1.1]

2.2 The weight function is the transported one. By [F1] the weight of $M_\lambda$ is $\Lambda_0 - \sum_i m_i(\lambda)\alpha_i$ with $m_i(\lambda)$ the number of residue-$i$ nodes, and by [F2] it transforms under conjugation as $\operatorname{wt}(\lambda') = \tau(\operatorname{wt}(\lambda))$; the vacuum $\varnothing$ has weight $\Lambda_0$ since $m_i(\varnothing) = 0$. The modular $\varepsilon_i(\mu)$ and $\varphi_i(\mu)$ are by construction the numbers of surviving $-$ and $+$, that is, of normal removable and conormal addable $i$-nodes in the sense of the modular signature. [given, F1, F2, step 1.1]

3.1 This proves part 1 of the Statement: the empty component of $F_{\mathrm{sym}}$ is exactly the $e$-restricted partitions (step 1.1), its operators are the modular good deletions and cogood additions (step 1.1), its weight is $\Lambda_0 - \sum_i m_i(\lambda)\alpha_i$ (step 2.2), $\varepsilon$, $\varphi$ count normal and conormal nodes (step 2.2), and it is $B(\Lambda_0)$ with every restricted shape reached from the empty partition by cogood additions (step 2.1). [given, step 1.1, step 2.1, step 2.2]

4.1 For part 2, the full $F_{\mathrm{sym}}$ has all partitions as vertices and its module is the transport of the modules of [F3], so its field decomposition is $F_{\mathrm{sym}} \cong \bigoplus_{k\ge0} V(\Lambda_0 - k\delta)^{\oplus p(k)}$ with $p(k)$ ordinary partition numbers; this direct sum is infinite, so $F_{\mathrm{sym}}$ is reducible whenever at least two summands are nonzero (for instance the summands $V(\Lambda_0)$ and $V(\Lambda_0-\delta)$). Since the empty component is exactly the $e$-restricted shapes by step 3.1, every other vertex of the full crystal is a non-restricted shape, and conversely each non-restricted shape lies outside the empty component. The axiom of choice is used here and only here, through the decomposition theorem of [F3]; the identifications of steps 1.1-2.1 use only the choice-free transport and the choice-free prime-case reachability of [F4]. [given, F3, F4, step 1.1, step 2.1, step 3.1]

4.2 Part 3, the James labels and the socle formula. Let $k$ be of characteristic $p > 0$ and $e = p$; $e$-restricted $\lambda$ are exactly the labels $D(\lambda)$ of the simple $kS_d$-modules in the dual-Specht convention, and for $p$-regular $\lambda'$ the published dictionary gives $D^{\lambda'} \cong D(\lambda) \otimes \operatorname{sgn}$ by [F6]. Suppose $\varepsilon_i(\lambda) > 0$ and let $A$ be the good $i$-node, so that $\tilde e_i\lambda = \lambda \setminus A$ and, by [F5], $\operatorname{soc} E_iD(\lambda) \cong D(\lambda\setminus A)$. Tensoring with $\operatorname{sgn}$ negates the Jucys-Murphy action: for $v \otimes w$ in $M \otimes \operatorname{sgn}$, $L_r(v\otimes w) = \sum_{s<r}((s\,r)v) \otimes ((s\,r)w) = -L_r v \otimes w$ because each $(s\,r)$ acts by $-1$ on $\operatorname{sgn}$ by [F6]; hence the content vector of the sign twist is the negative, and by [F5] the residue summands satisfy $E_{-i}\bigl(M \otimes \operatorname{sgn}\bigr) \cong (E_iM) \otimes \operatorname{sgn}$. The twist is an exact invertible endofunctor (its square is the identity on isomorphism classes), so it preserves socles and simples; applying it to $\operatorname{soc} E_iD(\lambda) \cong D(\lambda\setminus A)$ gives $\operatorname{soc}\bigl(E_{-i}(D(\lambda)\otimes\operatorname{sgn})\bigr) \cong D(\lambda\setminus A) \otimes \operatorname{sgn}$, and the two published re-identifications $D(\lambda)\otimes\operatorname{sgn} \cong D^{\lambda'}$ and $D(\lambda\setminus A)\otimes\operatorname{sgn} \cong D^{(\lambda\setminus A)'}$ of [F6] yield $\operatorname{soc} E_{-i}D^{\lambda'} \cong D^{(\tilde e_i\lambda)'}$; this is the stated formula, and it exhibits $E_{-i}$ as the sign twist of the residue functor $E_i$. [given, F5, F6, step 3.1]

5.1 Part 4, the boundary and the naming caveats. At $e = 0$ the colors are $\mathbb{Z}$ and, by [F7] together with the distinct-content computation recorded in the convention item [[def-symmetric-group-level-one-residue-and-partition-label-convention]], each residue class contains at most one corner of a partition, so no signature contains a cancellable pair; every partition is reached from the empty partition by good deletions, and the source's restricted set for level $1$ is all partitions. No finite affine datum, charge, weight formula or symmetric-group module statement is made in this boundary; and for a general finite $e \ge 2$ the crystal labels of parts 1 and 2 are Hecke labels, valid for any quantum characteristic $e$, not only for prime $e$ as in part 3. [given, F7, step 3.1, step 4.2] ∎
