---
id: def-reverse-row-deletion
kind: definition
title: Reverse row deletion
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for def-reverse-row-deletion and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-9; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"531c51417e8020e6f209c50515df1b585f898c0098b927b38393c00f001761c3","evidence":["research/frontier-38-owner-30-reader-9.md","research/frontier-38-owner-30-reader-findings-9.json","research/frontier-38-owner-30-dispatch/reader-reader-9.result.json","research/frontier-38-owner-30-step5-hash-9-post-5a.json","research/frontier-38-owner-30-alpha-batch-9-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-9.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/def-reverse-row-deletion.md","historical_raw_sha256":"ff23e701a81b38c65b1808391c4eb3d9493bf5a7667a7ae028290bb5c298ab19","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:30:27.180Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§2, printed p. 713: the DELETE (s,t) algorithm D1-D5 and the assertion that it inverts INSERT; read in the full text."
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 182, proof of Lemma 3: recovery of the last inserted element using the recording tableau to identify the deletion corner; read in the complete 13-page article."
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed pp. 12-13, proof of Theorem 1.14: the deletion rule removing a corner box; read in the full text."
---

## Definition

Let $U$ be a standard tableau with distinct real entries
([[def-young-tableau-standard-tableau-and-shape]]) and let $b=(s,t)$ be a
removable node of $[\operatorname{shape}(U)]$ (so $t=\lambda_s$ for
$\lambda=\operatorname{shape}(U)$). The **reverse row deletion** $U-b$ is the
following procedure. Set $i:=s$ and $x_{s+1}:=+\infty$ (a symbol larger than
every real number). While $i\ge1$: let $j$ be the largest index with
$1\le j\le\lambda_i$ and $U(i,j)<x_{i+1}$ (for $i=s$ this is $j=\lambda_s=t$,
the box $b$), set $x_i:=U(i,j)$ and overwrite the entry of box $(i,j)$ by
$x_{i+1}$ (for $i=s$ this empties the box $b$); if $i=1$ stop, otherwise
replace $i$ by $i-1$ and repeat. The procedure terminates after exactly $s$
row visits, since $i$ strictly decreases and stops at $1$. Its result is the
filling $V$ of $[\operatorname{shape}(U)]\setminus\{b\}$ obtained by the
overwrites, and the **expelled letter** is $x_1$. We write $(V,x_1):=U-b$.

The index $j$ exists at every step, and $V$ is a standard tableau, so the
procedure is well defined. For existence: after a row $i+1$ has been
processed, the carried letter $x_{i+1}$ was the entry of the box
$(i+1,j_{i+1})$ before that box was overwritten, where $j_{i+1}$ is the
position used in row $i+1$; the box $(i,j_{i+1})$ of the row above lies in the
diagram, because $j_{i+1}\le\lambda_{i+1}\le\lambda_i$, and by column
strictness of $U$ it carries an entry strictly smaller than $x_{i+1}$; hence
the set over which $j$ is defined is nonempty, and it is finite, so $j$ is
well defined. For standardness of $V$: at the moment row $i$ is processed it
is still the unmodified row $i$ of $U$, and $j$ is the largest index with
$U(i,j)<x_{i+1}$, so $U(i,j-1)<x_{i+1}<U(i,j+1)$ when those neighbours exist,
which keeps the row strictly increasing after the overwrite; the entry above
the overwritten box is $U(i-1,j)<U(i,j)<x_{i+1}$; and the entry below,
$U(i+1,j)$ after row $i+1$ has been processed, is larger than $x_{i+1}$: if
$j=j_{i+1}$ it is the overwriting letter $x_{i+2}>x_{i+1}$, and if
$j>j_{i+1}$ it is the unchanged entry in column $j$ of row $i+1$, which
exceeds the unchanged entry $U(i+1,j_{i+1})=x_{i+1}$ by row strictness. Thus
all strict inequalities of a standard tableau hold in $V$. Finally, every
entry of $U$ other than $x_1$ survives in $V$ with multiplicity one: each row
visit moves one entry upward into the box it overwrites and the single box
$b$ is emptied, so the multiset of entries of $V$ is that of $U$ with $x_1$
deleted; in particular $x_1$ is not an entry of $V$. No choice is used: the
procedure is deterministic and all data are finite.
