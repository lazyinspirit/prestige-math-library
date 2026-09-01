# Gate adjudication — `frontier-28`

Use the dispatch label and latest primary gate event to identify the failed
gate, then reproduce it on the current tree. Adjudicate each reported item or
repository finding from disk.

Repair only a confirmed in-scope content defect; preserve correct content and
report a false-positive detector. Do not change a gate, detector, or threshold.
A published correction requiring a debatable restatement, new result, deletion,
or reading-order change is an owner blocker.

Return a dispatch report with the gate id, each finding, disposition, evidence,
edit, rerun result, and unresolved blocker. This Step-5 repair route has no
Step-6 group or lead artifact.
