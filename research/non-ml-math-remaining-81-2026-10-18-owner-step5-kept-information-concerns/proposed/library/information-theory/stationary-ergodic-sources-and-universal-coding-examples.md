---
page: stationary-ergodic-sources-and-universal-coding-examples
title: "Stationary Ergodic Sources and Universal Coding — Examples"
status: draft
requires:
  - stationary-ergodic-sources-and-universal-coding
items: []
examples:
  - ex-nonstationary-block-entropy-rate-oscillation
  - ex-lz78-parse-with-explicit-terminator
  - ex-iid-and-markov-source-entropy-rates
---

The examples use the same bit convention as the A page and state every input law. The LZ78 trace appends a visible terminal marker and distinguishes dictionary nodes from the noninserted final marker phrase.

## Source trail

- **Robert M. Gray, Entropy and Information Theory, corrected edition** ([source](https://ee.stanford.edu/~gray/it.pdf)), Ch. 8 §§8.2–8.4, printed pp.153–164: stationary, componentwise, and AMS entropy theorem proofs; Ch. 11 §§11.2, 11.4 for source coding.
- **Robert M. Gray, Probability, Random Processes, and Ergodic Properties** ([source](https://ee.stanford.edu/~gray/arp.pdf)), §6.3, printed pp.130–132: AMS stationary-mean asymptotic domination, the RN decomposition estimate, and null future-tail transfer.
- **Paul H. Algoet and Thomas M. Cover, “A Sandwich Proof of the Shannon–McMillan–Breiman Theorem,” Annals of Probability 16 (1988), 899–909** ([source](https://isl.stanford.edu/~cover/papers/paper83.pdf)), Theorem 4, PDF pp.8–9: generalized AEP for AMS sources by likelihood-ratio sandwich.
- **Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.** ([source](https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf)), Ch. 2 source coding and prefix bounds; Ch. 13 §§13.4–13.5, printed pp.440–456: LZ78, Ziv inequality, finite-state bound, and LZ77 recurrence coding.
- **MIT OpenCourseWare 6.441, Chapter 8: Compressing Stationary Ergodic Sources** ([source](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/099eee31611a15cbb951bd427a89428f_MIT6_441S16_chapter_8.pdf)), §8.2, PDF pp.93–95: full finite-order Markov approximation proof of stationary ergodic SMB.
- **Stanford EE376C, Lempel-Ziv Compression lecture notes** ([source](https://web.stanford.edu/class/ee376a/files/EE376C_lecture_LZ.pdf.pdf)), §§1.3–1.5, PDF pp.4–9: LZ78 Ziv inequality and expected universality proof; finite-state and LZ77 theorem statements.
- **Satyadev Nandakumar, IIT Kanpur LZ78 lecture transcription (2014)** ([source](https://www.cse.iitk.ac.in/users/satyadev/sp14/LZ78.pdf)), §§1.3–1.5, PDF pp.4–9: individual-sequence LZ78 bound and finite-state optimality argument.
- **Northeastern University, Lempel–Ziv Lecture 3–4** ([source](https://www.khoury.northeastern.edu/home/vip/teach/IRcourse/2_indexing_ngrams/lecture_notes/lempel_ziv/lecture3_4.pdf)), Definition and theorem statement for greedy LZ77 phrase lengths; proof is not supplied in these notes.
- **A. D. Wyner and J. Ziv, “Some asymptotic properties of the entropy of a stationary ergodic data source with applications to data compression,” IEEE Trans. Information Theory 35 (1989), 1250–1258** ([source](https://doi.org/10.1109/18.45281)), This is retained as primary attribution only: its full text was unavailable and is not claimed as inspected or used as proof support. The A-page source trail records the inspected alternative full proof in Kontoyiannis’s dissertation, Chapter 3 §§3.1–3.2, Theorem 3.1 and Corollary 3.1(a), and the complete local recurrence proof. No unresolved proof hold is inferred from the unavailable primary article.
